import mongoose from "mongoose"

const productoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    thumbnails: {
        type: [String]
    }

})

const ProductModel = mongoose.model("products", productoSchema)

export default ProductModel