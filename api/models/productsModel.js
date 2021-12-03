"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the product",
  },

  quantity: {
    type: Number,
    required: "Kindly enterz the quantity of the product",
  },

  price: {
    type: Number,
    required: "Kindly enter the price of the product",
  },

  brand: {
    type: String,
    required: "Kindly enter the brand of the product",
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
