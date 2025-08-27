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

    // 3. Get the last completed shift (most recent one with endTime not null)
    const lastShift = await prisma.cashierBalanceHistory.findFirst({
      where: { endTime: { not: null } },
      orderBy: { endTime: "desc" },
    });

    if (lastShift && startingCash !== lastShift.endingCash) {
      throw new AppError(
        `Starting cash (${startingCash}) must equal previous shift's ending cash (${lastShift.endingCash})`,
        400
      );
    }

    // 4. Check if current time is within their shift hours
    const now = new Date();
    const currentHour = now.getHours(); // 0-23

    let shiftStart: number;
    let shiftEnd: number;

    if (cashier.shift === "SHIFT1") {
      shiftStart = 8;
      shiftEnd = 12;
    } else if (cashier.shift === "SHIFT2") {
      shiftStart = 13;
      shiftEnd = 17;
    } else {
      throw new AppError("Invalid shift assigned to cashier", 400);
    }

    if (currentHour < shiftStart || currentHour >= shiftEnd) {
      throw new AppError(
        `You can only clock in between ${shiftStart}:00 and ${shiftEnd}:00 for your shift`,
        400
      );
    }

    // 5. Create a new shift record
    const newShift = await prisma.cashierBalanceHistory.create({
      data: {
        cashierId,
        startTime: now,
        startingCash,
        totalRevenue: 0,
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

export const clockOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    const { endingCash } = req.body;

    // 1. Validate cashier existence
    const cashier = await prisma.cashier.findUnique({
      where: { id: cashierId },
    });
    if (!cashier) {
      throw new AppError("Cashier not found", 404);
    }
    if (endingCash === undefined || endingCash === null) {
      throw new AppError("Ending cash is required", 400);
    }

    // 2. Find active shift
    const activeShift = await prisma.cashierBalanceHistory.findFirst({
      where: {
        cashierId,
        endTime: null,
      },
    });

    if (!activeShift) {
      throw new AppError("No active shift found for this cashier", 400);
    }

    const expectedEndingCash =
      activeShift.startingCash + activeShift.totalRevenue;
    if (endingCash !== expectedEndingCash) {
      throw new AppError(
        `Ending cash (${endingCash}) must equal starting cash + total revenue (${expectedEndingCash})`,
        400
      );
    }

    // 4. Validate current time is within cashier's shift
    const now = new Date();
    const currentHour = now.getHours();

    let shiftStart: number;
    let shiftEnd: number;

    if (cashier.shift === "SHIFT1") {
      shiftStart = 8;
      shiftEnd = 12;
    } else if (cashier.shift === "SHIFT2") {
      shiftStart = 13;
      shiftEnd = 17;
    } else {
      throw new AppError("Invalid shift assigned to cashier", 400);
    }

    if (currentHour < shiftStart || currentHour >= shiftEnd) {
      throw new AppError(
        `You can only clock out between ${shiftStart}:00 and ${shiftEnd}:00 for your shift`,
        400
      );
    }

    // 4. Update shift with end time & ending cash
    const updatedShift = await prisma.cashierBalanceHistory.update({
      where: { id: activeShift.id },
      data: {
        endTime: now,
        endingCash,
      },
    });

    res.status(200).json({
      success: true,
      message: "Clock out successful",
      data: updatedShift,
    });
  } catch (error) {
    console.error("Clock-out error:", error);
    next(error);
  }
};

export const displayShift = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cashierId } = req.body.payload;
    if (!cashierId) {
      throw new AppError("Unauthorized: cashier not found in token", 401);
    }

    // Find cashier
    const cashier = await prisma.cashier.findUnique({
      where: { id: cashierId },
      select: { shift: true, firstName: true, lastName: true },
    });

    if (!cashier) {
      throw new AppError("Cashier not found", 404);
    }

    // Map shift enum to time range
    const shiftTimes: Record<string, { start: string; end: string }> = {
      SHIFT1: { start: "08:00", end: "12:00" },
      SHIFT2: { start: "13:00", end: "17:00" },
    };

    const currentShift = cashier.shift;
    const shiftTime = shiftTimes[currentShift];

    if (!shiftTime) {
      throw new AppError("Shift time not defined", 400);
    }

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const latestHistory = await prisma.cashierBalanceHistory.findFirst({
      where: {
        cashierId,
        startTime: {
          gte: todayStart,
          lte: todayEnd,
        },
        endTime: null,
      },
      orderBy: {
        startTime: "desc",
      },
    });

    // Get the last completed shift in the entire system
    const lastCompletedShift = await prisma.cashierBalanceHistory.findFirst({
      where: {
        endTime: { not: null }, // only completed shifts
      },
      orderBy: {
        endTime: "desc", // latest completed shift
      },
    });

    console.log("Last completed shift:", lastCompletedShift);

    res.status(200).json({
      success: true,
      message: "Shift time retrieved successfully",
      data: {
        cashierName: `${cashier.firstName} ${cashier.lastName ?? ""}`.trim(),
        shift: currentShift,
        startTime: shiftTime.start,
        endTime: shiftTime.end,
        totalRevenue: latestHistory?.totalRevenue ?? 0,
        lastEndingCash: lastCompletedShift?.endingCash ?? null,
      },
    });
  } catch (error) {
    next(error);
  }
};
