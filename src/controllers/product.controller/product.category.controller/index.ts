import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../prisma";

export async function createProductCategory(req: Request, res: Response, next: NextFunction) {
  try {
    const { name } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    
    const newCategory = await prisma.productCategory.create({
      data: {
        name,
        slug,
      },
    });

    res.status(200).json({
      success: true,
      message: "Product category created successfully",
      newCategory
    })
  } catch (error) {
    next(error);
  }
}

export async function getAllProductCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await prisma.productCategory.findMany({
      select: {
        id: true,
        name: true
      }
    });

    res.status(200).json({
      success: true,
      message: "Product categories fetched successfully",
      categories
    })
  } catch (error) {
    next(error);
  }
}

