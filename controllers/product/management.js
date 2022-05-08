const res = require("express/lib/response");
const Product = require("../../models/Product");
const ProductSchema = require("../../models/Product");

const createProduct = async (req, res) => {
  try {
    let data = new ProductSchema(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
  } catch (error) {
    res.send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    let data = await ProductSchema.updateOne(req.params, { $set: req.body });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

const listProduct = async (req, res) => {
  try {
    let data = await ProductSchema.find();
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    if (Object.keys(req.query).length !== 0) {
      let data = await ProductSchema.deleteMany(req.query)
      res.send(data)
    }
    else {
      res.send("Please provide info first")
    }
  } catch (error) {
    res.send(error)
  }
};

module.exports = { createProduct, updateProduct, listProduct, deleteProduct };
