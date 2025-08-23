import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../prisma';
import { AppError } from '../../utils/app.error';

export async function handleCreateProduct(req: Request, res: Response, next: NextFunction) {
  try {
    
    const { name, productCategoryId, description, price, productImgUrl, cldPublicId } = req.body;

    const slug = name.toLowerCase().replace(/\s+/g, '-');

    const existingProduct = await prisma.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      res.status(400).json({
        success: false,
        message: 'Product already exists',
      });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        slug,
        productCategoryId: Number(productCategoryId),
        description,
        price,
        productImgUrl,
        cldPublicId,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      newProduct,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllProducts(req: Request, res: Response, next: NextFunction) {
  try {
    const { page, limit ,search_name} = req.query;
    const pageNumber = page ? parseInt(page as string) : 1;
    const pageLimit = limit ? parseInt(limit as string) : 10;
    const totalItems = await prisma.product.count({
      where: {
        deletedAt: null,
      },
    })
    const products = await prisma.product.findMany({
      include: {
        productCategory: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      where: {
        deletedAt: null,
        name: {
          contains: search_name as string, mode: 'insensitive'
        },
      },
      take: pageLimit,
      skip: (pageNumber - 1) * pageLimit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      products,
      totalItems
    });
  } catch (error) {
    next(error);
  }
}

export async function getProductById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id, deletedAt: null },
      include: {
        productCategory: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      product,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProductById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { name, productCategoryId, description, price, productImgUrl, cldPublicId } = req.body;

    const existingProduct = await prisma.product.findUnique({
      where: { id },
    });
    if (!existingProduct) {
      throw new AppError('Product not found');
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        ...req.body,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      updatedProduct,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProductById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { password } = req.body || {};

    const existingProduct = await prisma.product.findUnique({
      where: { id, deletedAt: null },
    });
    if (!existingProduct) {
      throw new AppError('Product not found', 404);
    }

    // Check Admin Password to Confirm
    // if (password) {
    //   const hashedPassword = await hashPassword(password);
    //   req.body.password = hashedPassword;
    // }

    const deletedProduct = await prisma.product.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    res.status(200).json({
      success: true,
      message: 'Cashier deleted successfully',
    });
  } catch (error) {
    next(error);
  }
}