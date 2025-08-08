import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";

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
      },
    });
  } catch (error) {
    next(error);
  }
};
