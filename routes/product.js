import express from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct, patchProduct } from "../controllers/product.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const productsRoute = express.Router();


//CREATE
productsRoute.post("/", createProduct);
// verifyAdmin,

//UPDATE
productsRoute.put("/:id" ,updateProduct);
//, verifyAdmin

//PATCH
productsRoute.patch("/:id" ,patchProduct);
//, verifyAdmin

//DELETE
productsRoute.delete("/:id", verifyAdmin,deleteProduct);

//GET
productsRoute.get("/find/:id", getProduct);

//GET ALL
productsRoute.get("/", getProducts);

export default productsRoute;