import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import {
  confirmCartTransaction,
  getTransactionDetails,
  getTransactionHistory,
} from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.post(
  "/:cartId/create",
  JwtVerify.verifyToken,
  confirmCartTransaction
);
transactionRouter.get(
  "/get-history",
  JwtVerify.verifyToken,
  getTransactionHistory
);
transactionRouter.get(
  "/:transactionId/details",
  JwtVerify.verifyToken,
  getTransactionDetails
);
export default transactionRouter;
