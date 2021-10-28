'use strict';
var mongoose = require('mongoose'),
  Product = mongoose.model('Products');

exports.list_all_consumers = (req, res) => {
  Product.find({}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_salesagents = (req, res) => {
    Product.find({}, (err, task) => {
      if (err)
        res.send(err);
      res.json(task);
    });
  };












