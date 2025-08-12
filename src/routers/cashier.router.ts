import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import { displayShift } from "../controllers/cashier.controller";

const cashierRouter = Router();

cashierRouter.get("/display-shift", JwtVerify.verifyToken, displayShift);

export default cashierRouter;
