const express = require("express");
const router = express.Router()

const {
  createProduct,
  updateProduct,
  listProduct,
  deleteProduct,
} = require("../controllers/product/management");


// Product routes
router.post("/createproduct", createProduct);

router.put("/updateproduct/:_id", updateProduct);

router.get("/listproduct", listProduct);

router.delete("/deleteproduct", deleteProduct);


module.exports = router