const ProductSchema = require("../../models/Product");
const formidable = require("formidable");
const fs = require("fs");

exports.createProduct = (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    // console.log(fields);
    // console.log(files);
    if (err) {
      next(err);
      return;
    }

    let product = new ProductSchema(fields);

    if (files.photo) {
      if (files.photo.size > 3000000) {
        return res.status(400).json({
          error: "File Size too big!",
        });
      }
      // console.log(fs.readFileSync(files.photo.filepath).byteLength.toString());

      product.photo.data = fs.readFileSync(files.photo.filepath);
      product.photo.contentType = files.photo.type;
    }

    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in the DB failed",
        });
      }
      res.send(product);
    });
  });
};

exports.updateProduct = async (req, res) => {
  try {
    let data = await ProductSchema.updateOne(req.params, { $set: req.body });
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

exports.readProduct = async (req, res) => {
  try {
    const limitValue = req.query.limit || 2;
    const skipValue = req.query.skip || 0;
    let data = await ProductSchema.find()
      .populate("category")
      .limit(limitValue)
      .skip(skipValue);
    res.status(200).send(data);
    // console.log(data);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    if (Object.keys(req.query).length !== 0) {
      let data = await ProductSchema.deleteMany(req.query);
      res.send(data);
    } else {
      res.send("Please provide info first");
    }
  } catch (error) {
    res.send(error);
  }
};

exports.productByCategory = async (req, res) => {
  try {
    let data = await ProductSchema.where(req.query).populate("category");
    res.send(data);
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};
