import { Router } from "express";
import { getAllProducts, handleCreateProduct } from "../controllers/product.controller";
import { createProductCategory, getAllProductCategories } from "../controllers/product.controller/product.category.controller";

const productRouter = Router();

productRouter.post('/create', handleCreateProduct)
productRouter.get('/all', getAllProducts)

productRouter.post('/categories/create', createProductCategory)
productRouter.get('/categories', getAllProductCategories)

export default productRouter;