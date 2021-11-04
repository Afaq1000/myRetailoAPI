"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderItemSchema = new Schema({

  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orders', 
  },

  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products', 
    required: true
  },

  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = mongoose.model("OrdersItems", OrderItemSchema);
