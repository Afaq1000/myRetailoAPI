"use strict";
var mongoose = require("mongoose"),
  User = mongoose.model("Users");

exports.list_all_consumers = (req, res) => {
  User.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list_all_salesagents = (req, res) => {
  User.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};
