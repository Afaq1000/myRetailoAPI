"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  delivery_date: {
    type: Date,
    required: "Kindly enter the deivery Date",
  },

  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },


  placed_at: {
    type: Date,
    default: Date.now,
  },

  order_type: {
    type: String,
    required: "Kindly enter the type of the product",
  }
});
   

module.exports = mongoose.model("Orders", OrderSchema);

