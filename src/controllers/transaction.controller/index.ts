import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { AppError } from "../../utils/app.error";

export const confirmCartTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    // req.params?
    const { cartId } = req.params;

    const { paymentType, debitCardNumber, changeAmount } = req.body;

    if (!cashierId) throw new AppError("Cashier not authenticated", 401);

    // 1. Find active cart
    const cart = await prisma.cart.findFirst({
      where: {
        id: cartId,
        cashierId,
        status: "ACTIVE",
      },
      include: {
        cartItems: {
          where: { deletedAt: null },
          include: { product: true },
        },
      },
    });

    if (!cart) {
      throw new AppError("Active cart not found", 404);
    }

    // 2. Calculate total
    const totalAmount = cart.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    // 3. Find active CashierBalanceHistory (current shift)
    const shift = await prisma.cashierBalanceHistory.findFirst({
      where: {
        cashierId,
        endTime: null, // still clocked in
      },
    });

    if (!shift) throw new AppError("Cashier has no active shift", 400);

    // 4. Create Transaction + TransactionItems inside transaction
    const transaction = await prisma.$transaction(async (tx) => {
      // Create main Transaction
      const newTransaction = await tx.transaction.create({
        data: {
          cashierId,
          cartId: cart.id,
          totalAmount,
          paymentType,
          debitCardNumber: paymentType === "DEBIT" ? debitCardNumber : null,
          changeAmount: paymentType === "CASH" ? changeAmount : null,
          paymentDate: new Date(),
          cashierBalanceHistoryId: shift.id,
        },
      });

      // Create TransactionItems (snapshot of cart)
      const transactionItemsData = cart.cartItems.map((item) => ({
        transactionId: newTransaction.id,
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: item.product.price,
        subTotal: item.product.price * item.quantity,
      }));

      await tx.transactionItem.createMany({
        data: transactionItemsData,
      });

      // Update cart status
      await tx.cart.update({
        where: { id: cart.id },
        data: { status: "COMPLETED" },
      });

      // Update shift revenue
      await tx.cashierBalanceHistory.update({
        where: { id: shift.id },
        data: {
          totalRevenue: { increment: totalAmount },
        },
      });

      return newTransaction;
    });

    // 5. Fetch transaction with items + product names
    const fullTransaction = await prisma.transaction.findUnique({
      where: { id: transaction.id },
      include: {
        transactionItems: {
          include: {
            product: {
              select: { name: true },
            },
          },
        },
      },
    });

    res.status(201).json({
      message: "Transaction created successfully",
      transaction: {
        id: fullTransaction?.id,
        totalAmount: fullTransaction?.totalAmount,
        paymentType: fullTransaction?.paymentType,
        paymentDate: fullTransaction?.paymentDate,
        items: fullTransaction?.transactionItems.map((item) => ({
          productName: item.product.name,
          unitPrice: item.unitPrice,
          quantity: item.quantity,
          subTotal: item.subTotal,
        })),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactionHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;

    // 1. Fetch all transactions for this cashier
    const transactions = await prisma.transaction.findMany({
      where: {
        cashierId,
        deletedAt: null,
      },
      orderBy: {
        paymentDate: "desc",
      },
      select: {
        id: true,
        cartId: true,
        paymentType: true,
        debitCardNumber: true,
        totalAmount: true,
        changeAmount: true,
        paymentDate: true,
      },
    });

    // 2. Transform into cleaner response
    const history = transactions.map((tx) => ({
      transactionId: tx.id,
      cartId: tx.cartId,
      paymentType: tx.paymentType,
      debitCardNumber: tx.debitCardNumber,
      totalAmount: tx.totalAmount,
      changeAmount: tx.changeAmount,
      paymentDate: tx.paymentDate,
    }));

    res.status(200).json({
      message: "Transaction history fetched successfully",
      history,
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactionDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    const { transactionId } = req.params;

    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId, cashierId, deletedAt: null },
      include: {
        transactionItems: {
          where: { deletedAt: null },
          include: {
            product: { select: { name: true, price: true } },
          },
        },
      },
    });

    if (!transaction) throw new AppError("Transaction not found", 404);

    res.status(200).json({
      transactionId: transaction.id,
      cartId: transaction.cartId,
      paymentType: transaction.paymentType,
      debitCardNumber: transaction.debitCardNumber,
      totalAmount: transaction.totalAmount,
      changeAmount: transaction.changeAmount,
      paymentDate: transaction.paymentDate,
      items: transaction.transactionItems.map((item) => ({
        productName: item.product.name,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        subTotal: item.subTotal,
      })),
    });
  } catch (error) {
    next(error);
  }
};
