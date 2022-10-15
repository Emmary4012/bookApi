import mongoose from 'mongoose';
const RentalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    city: {
        type: String,
    },
    district: {
        type: String,
    },
    subcounty: {
        type: String,
    },
    village: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    distance: {
        type: String
    },
    img: {
        type: [String]
   },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    rooms: {
         type: [String] 
    },
    roomsdesc: {
        type: String
    },
    cheapestPrice: {
        type: Number
    },
        rating: {
        type: Number,
        min:0,
        max:5
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Rental", RentalSchema)