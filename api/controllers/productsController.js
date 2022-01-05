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

exports.create_a_product = async (req, res) => {
  try {
    const new_task = await Product.create({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      brand: req.body.brand
    });
    return res.json(new_task);
  } catch (err) {
    if (err) return res.status(422).json(err.message);
  }
};

exports.read_a_product = (req, res) => {
  Product.findById(req.params.productId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.delete_a_product = (req, res) => {
    Product.findOneAndDelete({
    _id: req.params.productId
  }, 
  function(err, task) {
    if (err){
     return res.send(err);
    }
     
    res.json({ message: 'Product successfully deleted' });
  });
};


