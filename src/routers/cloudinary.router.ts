import { Router } from "express";
import { handleSignedupload } from "../controllers/cloudinary.controller";

const cloudinaryRouter = Router();

cloudinaryRouter.post('/signed-upload', handleSignedupload);

export default cloudinaryRouter;