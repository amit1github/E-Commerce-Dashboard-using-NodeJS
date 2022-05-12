const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema
const Schema = mongoose.Schema

const CartSchema = new Schema({
    product: {
        type: ObjectId,
        ref: "products"
    },
    count: Number,
})

module.exports = mongoose.model("cart", CartSchema )