import { login, sessionLoginUser } from "../controllers/auth.controller";
import { Router } from "express";
import { JwtVerify } from "../middlewares/jwt.verify";

const authRouter = Router();
authRouter.get("/session-login", JwtVerify.verifyToken, sessionLoginUser);
authRouter.post("/login", login);

export default authRouter;
