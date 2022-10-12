import Product from "../models/Product.js";
import { createError } from "../Utils/error.js";

// const handleError = (err) => {
//     const error_obj = {name: ""}
//     if(err.code === 11000){
//         error_obj.name = "name already exists";
//     };

//     if(err.message === "name must be provided"){
//         error_obj.name = "name must be provided";
//     };

//     return error_obj;
// }

//export const createProduct = async (req,res,next)=> {

    // try{
    //     const newProduct = await Product.create(req.body);
    // }catch(err){
    //     // const error = handleError(err);

    //     // res.status(501).json(error);
    //     console.log("Sorry, product couldn't be created");
    // }
    
    export const createProduct =   async (req,res)=>{
        const newProduct = Product(req.body);
        try {
            //const savedProduct = await Product.create(req.body);
            const savedProduct = await newProduct.save();
            console.log("saved")
            res.status(200).json(savedProduct);
           

    } catch (error) {
        //createError(403, "Sorry, product creation failed. Pleease try again"); 
        console.log("Sorry, product couldn't be created");
    }
}


export const updateProduct = async (req,res)=>{
console.log(req.params.id)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedProduct);
    } catch (err) {
        createError(403, "Sorry, product update was unsuccessful. Pleease try again"); 
    }
   
}
export const patchProduct = async (req,res)=>{
console.log(req.params.id)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        res.status(200).json(updatedProduct);
    } catch (err) {
        createError(403, "Sorry, product update was unsuccessful. Pleease try again"); 
    }
   
}

export const deleteProduct = async (req,res)=>{

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been successfully deleted");
    } catch (err) {
        createError(403, "Sorry, product removal failed. Pleease try again");
    }
   
}

export const getProduct = async (req,res,next)=>{

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        createError(403, "Sorry, couldn't fetch the product. Pleease try again");  
    }
   
}

export const getProducts = async (req,res,next)=>{
 
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        createError(403, "Sorry, couldn't fetch the products. Pleease try again"); 
    }
   
}