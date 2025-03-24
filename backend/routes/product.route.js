import express from "express";
import {
  getProducts,
  newProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", newProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
