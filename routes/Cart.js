const express = require("express")

const router = express.Router()

const {createCart, readCart, updateCart, deleteCart} = require("../controllers/cart/Cart")

router.post("/createcart", createCart)

router.get("/readcart", readCart)

router.put("/updatecart", updateCart)

router.delete("/deletecart", deleteCart)

module.exports = router