// import {
//   adminLogin,
//   cashierLogin,
//   sessionLoginAdmin,
//   sessionLoginCashier,
// } from "../controllers/auth.controller";
import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";
import { login, sessionLogin } from "../controllers/auth.controller";

const authRouter = Router();
// authRouter.get(
//   "/cashier/session-login",
//   JwtVerify.verifyToken,
//   sessionLoginCashier
// );
// authRouter.post("/cashier-login", cashierLogin);
// authRouter.get(
//   "/admin/session-login",
//   JwtVerify.verifyToken,
//   sessionLoginAdmin
// );
// authRouter.post("/admin-login", adminLogin);

authRouter.get("/session-login", JwtVerify.verifyToken, sessionLogin);
authRouter.post("/login", login);

export default authRouter;
