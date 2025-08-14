import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import {
  clockIn,
  clockOut,
  displayShift,
} from "../controllers/cashier.controller";

const cashierRouter = Router();

cashierRouter.get("/display-shift", JwtVerify.verifyToken, displayShift);
cashierRouter.post("/clockIn", JwtVerify.verifyToken, clockIn);
cashierRouter.post("/clockOut", JwtVerify.verifyToken, clockOut);

export default cashierRouter;
