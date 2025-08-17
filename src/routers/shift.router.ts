import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import {
  clockIn,
  clockOut,
  displayShift,
} from "../controllers/shift.controller";

const shiftRouter = Router();

shiftRouter.get("/display", JwtVerify.verifyToken, displayShift);
shiftRouter.post("/clockIn", JwtVerify.verifyToken, clockIn);
shiftRouter.post("/clockOut", JwtVerify.verifyToken, clockOut);

export default shiftRouter;
