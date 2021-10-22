
var express = require('express');
var rootRouter = express.Router();

var productsRoutes = require('./productsRoutes.js');
var usersRoutes = require('./userRoutes.js');

rootRouter.use('/productsRoutes',productsRoutes);
rootRouter.use('/userRoutes',usersRoutes);


module.exports = rootRouter;