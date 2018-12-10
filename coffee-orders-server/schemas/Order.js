const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order: {
    name: String,
    coffeeType: String,
    date: { type: Date, default: Date.now }
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
