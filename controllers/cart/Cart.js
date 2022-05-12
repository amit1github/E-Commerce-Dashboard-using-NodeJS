const CartSchema = require("../../models/Cart")

exports.createCart = async (req, res) => {
    try {
        res.send("great")
    } catch (error) {
        res.send("failed")
    }
}

exports.readCart = async (req, res) => {
    try {
        res.send("great: readcart")
    } catch (error) {
        res.send("failed")
    }
}

exports.updateCart = async (req, res) => {
    try {
        res.send("great: updatecart")
    } catch (error) {
        res.send("failed")
    }
}

exports.deleteCart = async (req, res) => {
    try {
        res.send("great: deletecart")
    } catch (error) {
        res.send("failed")
    }
}






