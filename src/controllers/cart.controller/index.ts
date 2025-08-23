import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { AppError } from "../../utils/app.error";

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    const { productId, quantity, customerName } = req.body;
    // 1. Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new AppError("Product not found", 404);
    }

    // 2. Find existing active cart for cashier
    let cart = await prisma.cart.findFirst({
      where: {
        cashierId,
        status: "ACTIVE",
      },
    });

    // Normalize customerName
    const finalCustomerName =
      !customerName || customerName.trim() === ""
        ? "Guest"
        : customerName.trim();

    // 3. If no cart, create one
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          cashierId,
          customerName: finalCustomerName,
          status: "ACTIVE",
        },
      });
    }

    // 4. Check if product is already in the cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
      },
    });

    if (existingCartItem) {
      // If product already in cart, update quantity
      await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
    } else {
      // Else, add new item to cart
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }

    // 5. Fetch updated cart with items
    const updatedCart = await prisma.cart.findUnique({
      where: { id: cart.id },
      include: {
        cartItems: {
          where: { deletedAt: null },
          include: { product: true },
        },
      },
    });

    res.status(200).json({
      message: "Product added to cart successfully",
      cart: updatedCart,
    });
  } catch (error) {
    next(error);
  }
};

export const getCashierCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    // 1. Find active cart for this cashier
    const cart = await prisma.cart.findFirst({
      where: {
        cashierId,
        status: "ACTIVE",
      },
      include: {
        cartItems: {
          where: { deletedAt: null },
          include: {
            product: {
              select: {
                name: true,
                price: true,
              },
            },
          },
        },
      },
    });

    if (!cart) {
      throw new AppError("No active cart found for this cashier", 404);
    }

    // 2. Transform response to only keep name, quantity, price
    const items = cart.cartItems.map((item) => ({
      cartItemId: item.id,
      productId: item.productId, // useful for update qty
      productName: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));

    res.status(200).json({
      message: "Cart fetched successfully",
      cart: {
        cartId: cart.id,
        customerName: cart.customerName,
        items,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    const cartItemId = req.params.cartItemId;

    if (!cashierId) throw new AppError("Cashier not authenticated", 401);

    // find cart
    // const cart = await prisma.cart.findFirst({
    //   where: { cashierId, status: "ACTIVE", deletedAt: null },
    // });

    // if (!cart) {
    //   throw new AppError("Cart not found.", 404);
    // }

    // Check if the cart item exists and belongs to this cart
    // const cartItem = await prisma.cartItem.findUnique({
    //   where: { id: cartItemId },
    // });

    // const cartItem = await prisma.cartItem.findFirst({
    //   where: {
    //     id: cartItemId,
    //     deletedAt: null,
    //     cart: {
    //       cashierId,
    //       status: "ACTIVE",
    //       deletedAt: null,
    //     },
    //   },
    //   include: { cart: true, product: { select: { name: true } } },
    // });

    // if (!cartItem || cartItem.deletedAt)
    //   throw new AppError("Cart item not found.", 400);

    // // if (cartItem.cart.status !== "ACTIVE")
    // //   throw new AppError("Cannot delete item from a non-active cart", 400);

    // const updatedCartItem = await prisma.cartItem.update({
    //   where: { id: cartItemId },
    //   data: { deletedAt: new Date() },
    // });

    // 1. Find the cart first
    const cart = await prisma.cart.findFirst({
      where: { cashierId, status: "ACTIVE", deletedAt: null },
      include: {
        cartItems: {
          where: { deletedAt: null },
          select: {
            id: true,
            productId: true,
            quantity: true,

            product: { select: { name: true, price: true } },
          },
        },
      },
    });

    if (!cart) throw new AppError("Active cart not found", 404);

    // 2. Check if the item exists in this cart
    const item = cart.cartItems.find((i) => i.id === cartItemId);
    if (!item) throw new AppError("Cart item not found", 400);

    // 3. Soft delete the item
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { deletedAt: new Date() },
    });

    // 4. Re-fetch cart after deletion
    const updatedCart = await prisma.cart.findFirst({
      where: { id: cart.id },
      include: {
        cartItems: {
          where: { deletedAt: null },
          select: {
            id: true,
            productId: true,
            quantity: true,

            product: { select: { name: true, price: true } },
          },
        },
      },
    });

    res.status(200).json({
      message: "Cart item deleted successfully",
      // item: {
      //   itemId: updatedCartItem.id,
      //   itemName: cartItem.product.name,
      //   deletedAt: updatedCartItem.deletedAt,
      // },
      cart: updatedCart
        ? {
            cartId: updatedCart.id,
            customerName: updatedCart.customerName,
            items: updatedCart.cartItems.map((item) => ({
              id: item.id,
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.price,
              productName: item.product.name, // <- manual mapping
            })),
          }
        : null,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const updateCartItemQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    // const cartItemId = req.params.cartItemId;
    // const productId = req.params.productId;
    const { cartItemId, productId } = req.params;
    let { quantity } = req.body;
    quantity = parseInt(quantity);

    if (isNaN(quantity)) {
      throw new AppError("Quantity must be a valid number", 400);
    }
    if (quantity < 0) {
      throw new AppError("Quantity cannot be negative", 400);
    }

    // 1. Find the cartItem and ensure it's in the cashier's ACTIVE cart
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: cartItemId,
        productId,
        cart: {
          cashierId,
          status: "ACTIVE",
          deletedAt: null,
        },
        deletedAt: null,
      },
      include: { product: true },
    });

    if (!cartItem) {
      throw new AppError("Cart item not found", 404);
    }

    // 2. If quantity is 0, remove the item (optional, depending on your logic)
    // if (quantity === 0) {
    //   await prisma.cartItem.delete({
    //     where: { id: cartItem.id },
    //   });

    //   return res.status(200).json({
    //     success: true,
    //     message: "Cart item removed",
    //     removedItemId: cartItem.id,
    //   });
    // }

    // 3. Update quantity
    const updatedCartItem = await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity },
      include: { product: true },
    });

    res.status(200).json({
      success: true,
      message: "Cart item quantity updated",
      cartItem: updatedCartItem,
    });
  } catch (error) {
    next(error);
  }
};
