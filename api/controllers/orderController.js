"use strict";

const orderItemsModel = require("../models/orderItemsModel");

var mongoose = require("mongoose"),
  Order = mongoose.model("Orders"),
  OrdersItems = mongoose.model("OrdersItems");

exports.list_all_Orders = (req, res) => {
  Order.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};
// exports.list_all_Orders = async (req, res) => {
//   try{
//     const orders= await Order.find({})
//     const orderItems= await OrdersItems.find({})
//     return res.json([orders,orderItems]);
//     }catch(err){
//       if (err) return res.status(422).json(err.message);
//     }
  
// }



exports.create_a_Order = async (req, res) => {
  // console.log(req.user._id);
  try {
    const new_task = await Order.create({
      delivery_date: req.body.delivery_date,
      customer_id: req.user._id,
      order_type: req.body.order_type,
      placed_at:req.body.placed_at
    });
    const new_task1 = await OrdersItems.create({
      order_id: new_task._id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    });
    console.log('1');
    return res.json([new_task, new_task1]);
  } catch (err) {
    console.log('2');
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
