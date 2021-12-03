"use strict";

var mongoose = require("mongoose"),
  Order = mongoose.model("Orders"),
  OrdersItems = mongoose.model("OrdersItems");

exports.list_all_Orders = (req, res) => {
  Order.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_Order = async (req, res) => {
  try {
    const new_task = await Order.create({
      delivery_date: req.body.delivery_date,
      customer_id: req.user._id,
      order_type: req.body.order_type,
    });
    const new_task1 = await OrdersItems.create({
      order_id: new_task._id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    });

    return res.json([new_task, new_task1]);
  } catch (err) {
    if (err) return res.status(422).json(err.message);
  }
};

exports.read_a_Order = (req, res) => {
  Order.findById(req.params.orderId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.delete_a_Order = (req, res) => {
  Order.findOneAndDelete(
    {
      _id: req.params.orderId,
    },
    function(err, task) {
      if (err){
       return res.send(err);
      }
       
      res.json({ message: 'Order successfully deleted' });
    });
};
