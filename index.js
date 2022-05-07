const express = require("express");
const mongoose = require("mongoose");
const {createProduct, updateProduct, listProduct, deleteProduct} = require("./controllers/product/management");

const app = express();
app.use(express.json());

// database connection
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log(`MongoDB connected successfully`))
  .catch((err) => console.log(`Error connecting mongodb ` + err));


  // Todo: API routes 
  //  ! integrate and run from an another page || And search api tp put or not using regex?

app.get("/createproduct", createProduct);

app.put("/updateproduct/:_id", updateProduct)

app.get("/listproduct", listProduct)

app.delete("/deleteproduct/:_id", deleteProduct)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
