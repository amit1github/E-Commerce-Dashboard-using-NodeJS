const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// My Routes
const productRoutes = require("./routes/Product")
const categoryRoutes = require("./routes/Category")

// DB Connection
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log(`MongoDB connected successfully`))
  .catch((err) => console.log(`Error connecting mongodb ` + err));

// My Routes
app.use("/api", productRoutes)
app.use("/api", categoryRoutes)
  
// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
