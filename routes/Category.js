const express = require("express")
const router = express.Router()

const { createCategory, updateCategory, readCategory, deleteCategory } = require("../controllers/category/category")

router.post("/createcategory", createCategory)

router.put("/updatecategory/:_id", updateCategory)

router.get("/readcategory", readCategory)

router.delete("/deletecategory/:_id", deleteCategory)

module.exports = router