import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import { confirmCartTransaction } from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.post(
  "/create",
  JwtVerify.verifyToken,
  confirmCartTransaction
);

export default transactionRouter;
