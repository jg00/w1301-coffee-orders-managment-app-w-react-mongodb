const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = new express();
const PORT = process.env.PORT || 3001;
const Order = require("./schemas/Order");

mongoose.connect(
  "mongodb://localhost:27017/coffeedb",
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/api/orders/add", (req, res) => {
  console.log(req.body); // { name: 'ddd', coffeeType: 'ddgg' }
  let order = req.body;

  let newOrder = new Order({ order: order });
  newOrder.save((error, returnedOrder) => {
    if (error) {
      res.status(500).json({ error: "Unable to create post!" });
      return;
    }
    res.send(returnedOrder);
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
