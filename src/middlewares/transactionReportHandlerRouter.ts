import { NextFunction, Request, Response } from "express";
import {
  getAllShiftTransactions,
  getAllDailyItemTransaction,
  getAllDailyTransactions,
  getAllMonthlyTransactions,
} from "../controllers/report.controller";

export default async function transactionReportHandlerRouter(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { tab } = req.query;
    if (tab === "daily") {
      return getAllDailyTransactions(req, res, next);
    } else if (tab === "monthly") {
      return getAllMonthlyTransactions(req, res, next);
    } else if (tab === "daily_item") {
      return getAllDailyItemTransaction(req, res, next);
    } else if (tab === "daily_shift") {
      return getAllShiftTransactions(req, res, next);
    }
    next();
  } catch (error) {
    next(error);
  }
}
