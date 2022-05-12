const CartSchema = require("../../models/Cart");
const Product = require("../../models/Product");

exports.createCart = async (req, res) => {
  try {
    let data = new CartSchema(req.body);
    await data.save();
    // console.log(data);
    res.send(await data.populate("product"));
  } catch (error) {
    res.send(error);
  }
};

exports.readCart = async (req, res) => {
  try {
    let data = await CartSchema.find().populate("product");
    res.send(data);
  } catch (error) {
    res.send(`failed due to: ${error}`);
  }
};

exports.updateCart = async (req, res) => {
  try {
    let data = await CartSchema.updateOne(req.params, {$set: req.body})
    res.send(data);
  } catch (error) {
    res.send(`failed due to: ${error}`);
  }
};

exports.deleteCart = async (req, res) => {
    try {
        if (Object.keys(req.query).length !== 0) {
          let data = await CartSchema.deleteOne(req.query);
          res.send(data);
        } else {
          res.send("Please provide info first");
        }
      } catch (error) {
        res.send(error);
      }
};
