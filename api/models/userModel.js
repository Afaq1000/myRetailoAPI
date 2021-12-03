"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: { type: String, required: true, minlength: 3, maxlength: 30 },
  lastname: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },

  // pin: {
  //   type: Number,
  //   required: 'Kindly enter pin'

  // },

  // verified: {
  //  type: Boolean,
  //  required: true,
  //  default: false
  // }
});

module.exports = mongoose.model("Users", UserSchema);
