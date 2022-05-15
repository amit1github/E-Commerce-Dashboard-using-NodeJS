const express = require("express");
const router = express.Router()

const { createAddress, readAddress, updateAddress, deleteAddress } = require("../controllers/Address")


// Product routes
router.post("/createaddress", createAddress);

router.get("/readaddress", readAddress);

router.put("/updateaddress/:_id", updateAddress);

router.delete("/deleteaddress", deleteAddress)

module.exports = router
