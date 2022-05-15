const AddressSchema = require("../models/Address")

exports.createAddress = async(req, res) => {
    try {
        let data = new AddressSchema(req.body)
        // console.log(data);
        let result = await data.save()
        console.log(result);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.readAddress = async (req, res) => {
    try {
        let data = await AddressSchema.find(req.query)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.updateAddress = async (req, res) => {
    try {
        let data = await AddressSchema.updateOne(req.params, { $set: req.body })
        // console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deleteAddress = async (req, res) => {
    try {
        let data = await AddressSchema.deleteMany(req.query)
        // console.log(data);
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}