const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  brand: String,
  category: {
    type: ObjectId,
    ref: "categories",
    required: true,
  },
});

module.exports = mongoose.model("products", ProductSchema);
