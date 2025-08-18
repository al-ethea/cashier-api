import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { AppError } from "../../utils/app.error";
import { hashPassword } from "../../utils/hashPassword";
import { comparePassword } from "../../utils/comparePassword";

export async function addCashier(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      gender,
      shift,
      avatarImgUrl,
      cldPublicId,
    } = req.body;

    if (!firstName || !lastName || !email || !password || !shift) {
      throw new AppError("Missing required fields", 400);
    }

    const existingEmail = await prisma.cashier.findUnique({
      where: { email },
    });
    if (existingEmail) {
      throw new AppError("Email already exists", 400);
    }

    if (phoneNumber) {
      const existingPhoneNumber = await prisma.cashier.findUnique({
        where: { phoneNumber },
      });
      if (existingPhoneNumber) {
        throw new AppError("Phone number already exists", 400);
      }
    }

    const cashier = await prisma.cashier.create({
      data: {
        ...req.body,
      },
    });

    res.status(200).json({
      success: true,
      message: "Cashier created successfully",
      cashier,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllCashiers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cashiers = await prisma.cashier.findMany({
      where: { deletedAt: null },
    });

    res.status(200).json({
      success: true,
      message: "Cashiers fetched successfully",
      cashiers,
    });
  } catch (error) {
    next(error);
  }
}

export async function getCashierById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const cashier = await prisma.cashier.findUnique({
      where: { id, deletedAt: null },
    });

    if (!cashier) {
      throw new AppError("Cashier not found", 404);
    }

    res.status(200).json({
      success: true,
      message: "Cashier fetched successfully",
      cashier,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateCashierById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      gender,
      shift,
      avatarImgUrl,
      cldPublicId,
    } = req.body;

    // Check if email already exists (excluding current cashier)
    if (email) {
      const existingEmail = await prisma.cashier.findFirst({
        where: {
          email,
          NOT: { id },
        },
      });
      if (existingEmail) {
        throw new AppError("Email already exists", 400);
      }
    }

    // Check if phone number already exists (excluding current cashier)
    if (phoneNumber) {
      const existingPhoneNumber = await prisma.cashier.findFirst({
        where: {
          phoneNumber,
          NOT: { id },
        },
      });
      if (existingPhoneNumber) {
        throw new AppError("Phone number already exists", 400);
      }
    }

    if (password) {
      const hashedPassword = await hashPassword(password);
      req.body.password = hashedPassword;
    }

    const updatedCashier = await prisma.cashier.update({
      where: { id },
      data: {
        ...req.body,
      },
    });

    res.status(200).json({
      success: true,
      message: "Cashier updated successfully",
      updatedCashier,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteCashierById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const { password } = req.body || {};

    const existingCashier = await prisma.cashier.findUnique({
      where: { id, deletedAt: null },
    });
    if (!existingCashier) {
      throw new AppError("Cashier not found", 404);
    }

    // Check Admin Password to Confirm
    // if (password) {
    //   const hashedPassword = await hashPassword(password);
    //   req.body.password = hashedPassword;
    // }

    const deletedCashier = await prisma.cashier.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    res.status(200).json({
      success: true,
      message: "Cashier deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
