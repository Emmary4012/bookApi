import express from "express";
import { createHostel, deleteHostel, getHostels, getHostel, updateHostel, countByCity, countByType, getHostelRooms } from "../controllers/hostel.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const hostelsRoute = express.Router();


//CREATE
hostelsRoute.post("/", createHostel);
// verifyAdmin,

//UPDATE
hostelsRoute.put("/:id", verifyAdmin ,updateHostel);

//DELETE
hostelsRoute.delete("/:id", verifyAdmin,deleteHostel);

//GET
hostelsRoute.get("/find/:id", getHostel);

//GET ALL
hostelsRoute.get("/", getHostels);
hostelsRoute.get("/countByCity", countByCity);
hostelsRoute.get("/countByType", countByType);
hostelsRoute.get("/room/:id", getHostelRooms);

export default hostelsRoute;