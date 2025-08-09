import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { AppError } from "../../utils/app.error";

export const clockIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    const { startingCash } = req.body;

    // 1. Check if cashier exists
    const cashier = await prisma.cashier.findUnique({
      where: { id: cashierId },
    });

    if (!cashier) {
      throw new AppError("Cashier not found", 404);
    }

    // 2. Check if there's an active shift for this cashier
    const activeShift = await prisma.cashierBalanceHistory.findFirst({
      where: {
        cashierId,
        endTime: null, // still active
      },
    });

    if (activeShift) {
      throw new AppError("Cashier is already clocked in", 400);
    }

    // 3. Create a new shift record
    const newShift = await prisma.cashierBalanceHistory.create({
      data: {
        cashierId,
        startTime: new Date(),
        startingCash: startingCash ?? 0,
      },
    });

    res.status(201).json({
      success: true,
      message: "Clock in successful",
      data: newShift,
    });
  } catch (error) {
    next(error);
  }
};
