const categorySchema = require("../../models/Category");
const formidable = require("formidable");
const fs = require("fs");

exports.createCategory = async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, field, file) => {
    let category = new categorySchema(field);

    try {
      if (file.image) {
        if (file.image.size > 3000000) {
          return res.status(400).json({
            error: "File Size too big!",
          });
        }
        category.image.data = fs.readFileSync(file.image.filepath);
        category.image.contentType = file.image.type;
      }
    } catch (error) {
      res.send(error);
    }

    category.save((err, category) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in the DB failed",
        });
      }
      res.send(category);
    });
  });
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
    const limitValue = req.query.limit || 2;
    const skipValue = req.query.skip || 0;
    let data = await categorySchema.find().limit(limitValue).skip(skipValue)
    res.status(200).send(data);
    // console.log(data);
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
