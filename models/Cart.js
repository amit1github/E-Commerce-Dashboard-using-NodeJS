const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const ProductCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "products",
  },
  quantity: Number,
});
module.exports = mongoose.model("Productcart", ProductCartSchema);

const CartSchema = new Schema({
  products: [ProductCartSchema],
});

module.exports = mongoose.model("carts", CartSchema);
