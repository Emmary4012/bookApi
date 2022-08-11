import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../Utils/error.js";
import  jwt  from "jsonwebtoken";
import { json } from "express";

export const createUser = async (req,res,next)=> {
    try {
        console.log(req.body);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        console.log("Getting User details");
        console.log(req.body);
        const newUser = await new User({
            ...req.body,
            password:hash,
        });
        JSON.Stringify(newUser);
        console.log("Saving User" + newUser);
        await newUser.save();
        //res.status(200).send("User has been created")
    } catch (error) {
        next(createError(403, "User not created, try again"));
        console.log("User not created");
    }
}

export const login = async (req,res,next)=> {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(createError(404,"User not found"));
        console.log("User found");
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))
        console.log("Password matchs");
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {httpOnly:true,}).status(200).json({details:{...otherDetails}, isAdmin})
       
    } catch (error) {
        next(err)
    }
}