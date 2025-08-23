import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma";
import { comparePassword } from "../../utils/comparePassword";
import { AppError } from "../../utils/app.error";
import { jwtSign, jwtSignAdmin } from "../../utils/jwt.sign";

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
    const isPasswordMatch = await comparePassword(password, cashier.password);

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
      // throw new AppError("You are not in your shift hours", 403);
    }

    // Sign token
    const token = jwtSign({
      cashierId: cashier.id,
      email: cashier.email,
      shift: cashier.shift,
    });

    res.status(200).json({
      success: true,
      message: "Login successful (cashier)",
      data: {
        token,
        role: "cashier",
        cashierId: cashier.id,
        shift: cashier.shift,
        email: cashier.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const adminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findFirst({ where: { email } });

    if (!admin) {
      throw new AppError("Email not found", 401);
    }

    // Compare passwords
    const isPasswordMatch = await comparePassword(password, admin.password);

    if (!isPasswordMatch) {
      throw new AppError("Invalid password", 401);
    }

    const token = jwtSignAdmin({
      adminId: admin.id,
      email: admin.email,
    });

    res.status(200).json({
      success: true,
      message: "Login success (admin)",
      data: {
        token,
        role: "admin",
        adminId: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sessionLoginCashier = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payload } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    const cashier = await prisma.cashier.findUnique({
      where: { id: payload.cashierId },
    });

    if (!cashier) throw new AppError("Cashier not found", 404);

    res.status(200).json({
      success: true,
      message: "Session login (cashier) successful",
      data: {
        token,
        cashierId: cashier.id,
        email: cashier.email,
        role: "cashier",
        shift: cashier.shift,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sessionLoginAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payload } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    const admin = await prisma.admin.findFirst({
      where: { id: payload.adminId },
    });

    if (!admin) throw new AppError("Admin not found", 404);

    res.status(200).json({
      success: true,
      message: "Session login (admin) successfully",
      data: {
        token,
        adminId: admin.id,
        email: admin.email,
        role: "admin",
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const findCashier = await prisma.cashier.findFirst({ where: { email } });
    const findAdmin = await prisma.admin.findFirst({ where: { email } });

    if (findCashier) {
      const isPasswordMatch = await comparePassword(
        password,
        findCashier.password
      );
      if (!isPasswordMatch) throw new AppError("Invalid password", 401);

      // ✅ Shift validation for cashier
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      let inShift = false;

      if (findCashier.shift === "SHIFT1") {
        inShift =
          (hour > 8 && hour < 12) ||
          (hour === 8 && minute >= 0) ||
          (hour === 12 && minute === 0);
      } else if (findCashier.shift === "SHIFT2") {
        inShift =
          (hour > 13 && hour < 17) ||
          (hour === 13 && minute >= 0) ||
          (hour === 17 && minute === 0);
      }

      // if (!inShift) throw new AppError("You are not in your shift hours", 403);

      const token = jwtSign({
        cashierId: findCashier.id,
        email: findCashier.email,
        shift: findCashier.shift,
      });

      res.status(200).json({
        success: true,
        message: "Login successful (cashier)",
        data: {
          token,
          role: "cashier",
          cashierId: findCashier.id,
          email: findCashier.email,
          shift: findCashier.shift,
        },
      });
    } else if (findAdmin) {
      const isPasswordMatch = await comparePassword(
        password,
        findAdmin.password
      );
      if (!isPasswordMatch) throw new AppError("Invalid password", 401);

      const token = jwtSignAdmin({
        adminId: findAdmin.id,
        email: findAdmin.email,
      });

      res.status(200).json({
        success: true,
        message: "Login success (admin)",
        data: {
          token,
          role: "admin",
          adminId: findAdmin.id,
          email: findAdmin.email,
        },
      });
    } else {
      throw new AppError("User not found", 404);
    }
  } catch (error) {
    next(error);
  }
};

export const sessionLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payload } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    if (payload.role === "cashier") {
      const cashier = await prisma.cashier.findUnique({
        where: { id: payload.cashierId },
      });

      if (!cashier) throw new AppError("Cashier not found", 404);

      res.status(200).json({
        success: true,
        message: "Session login (cashier) successful",
        data: {
          token,
          cashierId: cashier.id,
          email: cashier.email,
          role: "cashier",
          shift: cashier.shift,
        },
      });
    } else if (payload.role === "admin") {
      const admin = await prisma.admin.findUnique({
        where: { id: payload.adminId },
      });

      if (!admin) throw new AppError("Admin not found", 404);

      res.status(200).json({
        success: true,
        message: "Session login (admin) successful",
        data: {
          token,
          adminId: admin.id,
          email: admin.email,
          role: "admin",
        },
      });
    } else {
      throw new AppError("Invalid token payload", 400);
    }
  } catch (error) {
    next(error);
  }
};
