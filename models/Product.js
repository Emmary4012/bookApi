import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema({
    name: {
        type: String, 
        // required: [true, "name must be provided"]
    },
    category: {
        type: String,
    },
    subcategory: {
        type: String,
    },
    type: {
        type: String,
    },
    brand: {
        type: String,
    },
    source: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    img: {
        type: String,
    },
    price: {
        type: Number, 
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    description: {
        type: String
    }
},{timestamps: true});

export default mongoose.model("Product", ProductSchema)