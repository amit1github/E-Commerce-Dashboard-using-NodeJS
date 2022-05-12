const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      // required: true,
      maxlength: 32,
    },
    price: {
      type: Number,
      // required: true,
      maxlength: 32,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "categories",
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    sold: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", ProductSchema);
