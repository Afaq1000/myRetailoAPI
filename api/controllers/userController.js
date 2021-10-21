'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('Products');

exports.list_all_consumers = function(req, res) {
  Product.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_salesagents = function(req, res) {
    Product.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };












