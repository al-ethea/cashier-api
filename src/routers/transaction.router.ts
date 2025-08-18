import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import {
  confirmCartTransaction,
  getTransactionHistory,
} from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.post(
  "/create",
  JwtVerify.verifyToken,
  confirmCartTransaction
);
transactionRouter.get(
  "/get-history",
  JwtVerify.verifyToken,
  getTransactionHistory
);
export default transactionRouter;
