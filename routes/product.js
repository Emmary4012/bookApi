import express from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const productsRoute = express.Router();


//CREATE
productsRoute.post("/", createProduct);
// verifyAdmin,

//UPDATE
productsRoute.put("/:id", verifyAdmin ,updateProduct);

//DELETE
productsRoute.delete("/:id", verifyAdmin,deleteProduct);

//GET
productsRoute.get("/find/:id", getProduct);

//GET ALL
productsRoute.get("/", getProducts);

export default productsRoute;