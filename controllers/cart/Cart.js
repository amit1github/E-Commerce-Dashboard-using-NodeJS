const CartSchema = require("../../models/Cart");

exports.createCart = async (req, res) => {
  try {
    let data = new CartSchema(req.body);
    await data.save();
    // console.log(data);
    res.send(await data.populate("product"));
  } catch (error) {
    res.send(error);
  }
};

// !important... Classic logic as of now for cart total and model
exports.readCart = async (req, res) => {
  try {
    let data = await CartSchema.findOne(req.query).populate("products.product").populate("products.product.category");
    console.log(data);

    let total = 0;
    let subtotal = 0;
    data.products.map((item) => {
      let price = item.product.price;
      let quantity = item.quantity;
      let amount = price * quantity;

      // console.log(total = total + amount); 
       (subtotal = subtotal + amount);
    });
    let discount = subtotal / 10
     total = subtotal - discount


    res.status(200).send({ data, discount, subtotal, total });
  } catch (error) {
    res.status(400).send(`failed due to: ${error}`);
  }9
};

exports.updateCart = async (req, res) => {
  try {
    let data = await CartSchema.updateOne(req.params, { $set: req.body });
    res.send(data);
  } catch (error) {
    res.send(`failed due to: ${error}`);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    if (Object.keys(req.query).length !== 0) {
      let data = await CartSchema.deleteOne(req.query);
      res.send(data);
    } else {
      res.send("Please provide info first");
    }
  } catch (error) {
    res.send(error);
  }
};
