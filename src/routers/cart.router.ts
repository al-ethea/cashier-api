import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import { addToCart, getCashierCart } from "../controllers/cart.controller";

const cartRouter = Router();

cartRouter.post("/add", JwtVerify.verifyToken, addToCart);
cartRouter.get("/display", JwtVerify.verifyToken, getCashierCart);

export default cartRouter;
