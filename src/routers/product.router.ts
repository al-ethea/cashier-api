import { Router } from "express";
import {
  deleteProductById,
  getAllProducts,
  getProductById,
  handleCreateProduct,
  updateProductById,
} from "../controllers/product.controller";
import {
  createProductCategory,
  getAllProductCategories,
} from "../controllers/product.controller/product.category.controller";

const productRouter = Router();

productRouter.post("/create", handleCreateProduct);
productRouter.get("/all", getAllProducts);
productRouter.get("/id/:id", getProductById);
productRouter.put("/update/:id", updateProductById);
productRouter.delete("/delete/:id", deleteProductById);

productRouter.post("/categories/create", createProductCategory);
productRouter.get("/categories", getAllProductCategories);

export default productRouter;
