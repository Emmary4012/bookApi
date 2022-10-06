import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from  './routes/auth.js';
// import hotelsRoute from  './routes/hotels.js';
// import roomsRoute from  './routes/rooms.js';
import usersRoute from  './routes/users.js';
import cookieParser from "cookie-parser";
// import hostelsRoute from "./routes/hostels.js";
// import rentalsRoute from "./routes/rentals.js";
// import apartmentsRoute from "./routes/apartments.js";
// import hostelRoomsRoute from "./routes/hostelRooms.js";
// import rentalRoomsRoute from "./routes/rentalRooms.js";
// import apartmentRoomsRoute from "./routes/apartmentRooms.js";
import productsRoute from "./routes/product.js";

const app = express();
dotenv.config();

const connect = async () => {    
try {
    //mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error; 
  }
}; 

app.use(cors({origin:"*",}));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.json());
// app.use((req)=>{
//   const token = req.cookies.access_token;
//   console.log(token);
//   console.log(req.body); 
// })

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/hostels", hostelsRoute);
// app.use("/api/rentals", rentalsRoute);
// app.use("/api/apartments", apartmentsRoute);
// app.use("/api/rooms", roomsRoute);
// app.use("/api/hostelsrooms", hostelRoomsRoute);
// app.use("/api/rentalsrooms", rentalRoomsRoute);
// app.use("/api/apartmentsrooms", apartmentRoomsRoute);
app.use("/api/products", productsRoute);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  connect();
  console.log("server is running on port", server.address().port);
});

