import { Router } from "express";
import {
  addCashier,
  deleteCashierById,
  getAllCashiers,
  getCashierById,
  updateCashierById,
} from "../controllers/cashier.controller";

const cashierRouter = Router();

cashierRouter.get("/all", getAllCashiers);
cashierRouter.get("/id/:id", getCashierById);
cashierRouter.post("/create", addCashier);
cashierRouter.put("/update/:id", updateCashierById);
cashierRouter.delete("/delete/:id", deleteCashierById);

export default cashierRouter;
