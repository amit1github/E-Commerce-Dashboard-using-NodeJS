const express = require("express");
const createProduct = require("./controllers/product/management");

const app = express();

app.get("/", createProduct);
