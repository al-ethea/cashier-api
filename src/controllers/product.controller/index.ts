import { NextFunction, Request, Response } from 'express';
import { prisma } from '../../prisma';

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

export async function getAllProducts (req: Request, res: Response, next: NextFunction) {
  try {
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
      },
      }
    );

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      products,
    });
  } catch (error) {
    next(error);
  }
}