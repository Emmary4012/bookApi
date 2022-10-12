import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../Utils/error.js";
import  jwt  from "jsonwebtoken";
import { json } from "express";

export const createUser = async (req,res,next)=> {
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = await User(req.body);
        Object.assign(newUser, {password:hash});
        
    try {
        await newUser.save();
        res.status(200).send("User has been created successfully");
    } catch (error) {
        next(createError(403, "Sorry, new user wasn't created. Try again"));
    }
}

export const login = async (req,res,next)=> {
    try {
        console.log("first")
        const username = req.body.username; 
        if(!username) return res.status(400).json("Username is required");

        const passWord =  req.body.password; 
        if(!passWord) return res.status(400).json("Password is required");

        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(400).json("User not found");
        
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong password")
        // if(!isPasswordCorrect) return next(createError(400, "Wrong password"));
         
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT, {expiresIn:"7d"})
        console.log(token)
        const { password, isAdmin, ...otherDetails } = user._doc;
        //res.cookie("access_token", token, {httpOnly:true,}).status(200).json({...otherDetails})
        res.cookie("access_token", token).status(200).json({...otherDetails})
       
    } catch (error) {
        res.status(404).send("Sorry, an internal error occured");
    }
}