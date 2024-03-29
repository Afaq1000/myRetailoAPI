"use strict";
var mongoose = require("mongoose"),
  Product = mongoose.model("Products");

exports.list_all_products = (req, res) => {
  // use functions instead of expressions using module.export
  Product.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};


exports.create_a_product = (req, res) => {
  const new_task = new Product(req.body);
  new_task.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};



exports.read_a_product = (req, res) => {
  Product.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.delete_a_product = (req, res) => {
  Product.remove(
    {
      _id: req.params.taskId,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: "Product successfully deleted" });
    }
  );
};
