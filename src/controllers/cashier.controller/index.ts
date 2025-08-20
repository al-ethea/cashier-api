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

    // 1. Find existing cashier
    const existingCashier = await prisma.cashier.findFirst({
      where: { id, deletedAt: null },
    });
    if (!existingCashier) {
      throw new AppError("Cashier not found", 404);
    }

    // 2. Build update data only if value changed
    const updateData: any = {};

    if (firstName && firstName !== existingCashier.firstName)
      updateData.firstName = firstName;
    if (lastName && lastName !== existingCashier.lastName)
      updateData.lastName = lastName;

    if (email && email !== existingCashier.email) {
      const existingEmail = await prisma.cashier.findFirst({
        where: { email, NOT: { id } },
      });
      if (existingEmail) throw new AppError("Email already exists", 400);
      updateData.email = email;
    }

    if (phoneNumber && phoneNumber !== existingCashier.phoneNumber) {
      const existingPhone = await prisma.cashier.findFirst({
        where: { phoneNumber, NOT: { id } },
      });
      if (existingPhone) throw new AppError("Phone number already exists", 400);
      updateData.phoneNumber = phoneNumber;
    }

    if (gender && gender !== existingCashier.gender) updateData.gender = gender;
    if (shift && shift !== existingCashier.shift) updateData.shift = shift;
    if (avatarImgUrl && avatarImgUrl !== existingCashier.avatarImgUrl)
      updateData.avatarImgUrl = avatarImgUrl;
    if (cldPublicId && cldPublicId !== existingCashier.cldPublicId)
      updateData.cldPublicId = cldPublicId;

    if (password && password !== "") {
      updateData.password = await hashPassword(password);
    }

    // 3. Nothing to update case
    if (Object.keys(updateData).length === 0) {
      return res.status(200).json({
        success: true,
        message: "Nothing to update",
        updatedCashier: existingCashier,
      });
    }

    // 4. Update cashier
    const updatedCashier = await prisma.cashier.update({
      where: { id },
      data: updateData,
    });

    return res.status(200).json({
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
