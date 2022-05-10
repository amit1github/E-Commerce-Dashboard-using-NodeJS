const express = require("express");
const router = express.Router()

const {
  createProduct,
  updateProduct,
  readProduct,
  deleteProduct,
} = require("../controllers/product/product");


// Product routes
router.post("/createproduct", createProduct);

router.put("/updateproduct/:_id", updateProduct);

router.get("/readproduct", readProduct);

router.delete("/deleteproduct", deleteProduct);




module.exports = router