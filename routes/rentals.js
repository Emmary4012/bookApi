import express from "express";
import { createRental, deleteRental, getRentals, getRental, updateRental, getRentalRooms } from "../controllers/rental.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const rentalsRoute = express.Router();


//CREATE
rentalsRoute.post("/", createRental);
// verifyAdmin,

//UPDATE
rentalsRoute.put("/:id", verifyAdmin ,updateRental);

//DELETE
rentalsRoute.delete("/:id", verifyAdmin,deleteRental);

//GET
rentalsRoute.get("/find/:id", getRental);

//GET ALL
rentalsRoute.get("/", getRentals);
rentalsRoute.get("/room/:id", getRentalRooms);

export default rentalsRoute;