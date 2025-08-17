import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import {
  addToCart,
  deleteCartItem,
  getCashierCart,
} from "../controllers/cart.controller";

const cartRouter = Router();

cartRouter.post("/add", JwtVerify.verifyToken, addToCart);
cartRouter.get("/display", JwtVerify.verifyToken, getCashierCart);
cartRouter.put("/:cartItemId/delete", JwtVerify.verifyToken, deleteCartItem);

export default cartRouter;
