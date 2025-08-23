import { NextFunction, Request, Response } from "express";
import { get } from "http";
import { getAllCashierTransactions, getAllDailyItemTransaction, getAllDailyTransactions, getAllMonthlyTransactions } from "../controllers/report.controller";

export default async function transactionReportHandlerRouter(req:Request, res:Response, next:NextFunction) {
  try {
    const { tab } = req.query
    if (tab === 'daily') {
      return getAllDailyTransactions(req, res, next)
    } else if (tab === 'monthly') {
      return getAllMonthlyTransactions(req, res, next)
    } else if (tab === 'daily_item') {
      return getAllDailyItemTransaction(req, res, next)
    } else if (tab === 'cashier') {
      return getAllCashierTransactions(req, res, next)
    }
    next();
  } catch (error) {
    next(error);
  }
}