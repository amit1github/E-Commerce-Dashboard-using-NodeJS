const res = require("express/lib/response");
const categorySchema = require("../../models/Category");

exports.createCategory = async (req, res) => {
  try {
    let data = new categorySchema(req.body);
    let result = await data.save();
    res.send(result);
    console.log(result);
  } catch (error) {
    res.send(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    let data = await categorySchema.updateOne(req.params, { $set: req.body });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

exports.readCategory = async (req, res) => {
  try {
    let data = await categorySchema.find();
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteCategory = async (req, res) => {
  console.log(req.params);
  try {
    let data = await categorySchema.deleteOne(req.params);
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};
