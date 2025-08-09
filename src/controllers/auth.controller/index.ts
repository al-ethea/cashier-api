import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { comparePassword } from "../../utils/comparePassword";
import { AppError } from "../../utils/app.error";
import { jwtSign } from "../../utils/jwt.sign";

export const cashierLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    // Find cashier by email
    const cashier = await prisma.cashier.findFirst({
      where: { email },
    });

    if (!cashier) {
      throw new AppError("Email not found", 401);
    }

    // Compare passwords
    const isPasswordMatch = await comparePassword(cashier.password, password);

    if (!isPasswordMatch) {
      throw new AppError("Invalid password", 401);
    }

    // Get current hour in 24h format
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Check shift time
    let inShift = false;

    if (cashier.shift === "SHIFT1") {
      // 8:00 - 12:00
      inShift =
        (currentHour > 8 && currentHour < 12) ||
        (currentHour === 8 && currentMinute >= 0) ||
        (currentHour === 12 && currentMinute === 0);
    } else if (cashier.shift === "SHIFT2") {
      // 13:00 - 17:00
      inShift =
        (currentHour > 13 && currentHour < 17) ||
        (currentHour === 13 && currentMinute >= 0) ||
        (currentHour === 17 && currentMinute === 0);
    }

    if (!inShift) {
      throw new AppError("You are not in your shift hours", 403);
    }

    // Sign token
    const token = jwtSign({
      cashierId: cashier.id,
      email: cashier.email,
      shift: cashier.shift,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        shift: cashier.shift,
        email: cashier.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sessionLoginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payload } = req.body;

    const findUserByCashierId = await prisma.cashier.findFirst({
      where: { id: payload.cashierId },
    });

    res.status(200).json({
      success: true,
      message: "Session login successfully",
      data: {
        token: req.headers.authorization?.split(" ")[1],
        email: findUserByCashierId?.email,
        shift: findUserByCashierId?.shift,
      },
    });
  } catch (error) {
    next(error);
  }
};
