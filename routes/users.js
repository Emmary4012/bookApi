import express from "express";
import { deleteUser, getUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../Utils/verifyToken.js";
const usersRoute = express.Router();

usersRoute.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("you are logged in")
})

//UPDATE
usersRoute.put("/:id",verifyUser, updateUser);

//DELETE
usersRoute.delete("/:id",verifyUser, deleteUser);

//GET
usersRoute.get("/:id",verifyUser, getUser);

//GET ALL
usersRoute.get("/",verifyAdmin,  getUsers);
 
export default usersRoute