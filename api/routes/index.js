const express = require("express");
const rootRouter = express.Router();

const productsRoutes = require("./productsRoutes.js");
const usersRoutes = require("./userRoutes.js");
const orderRoutes = require("./orderRoutes.js");

rootRouter.use("/productsRoutes", productsRoutes);
rootRouter.use("/userRoutes", usersRoutes);
rootRouter.use("/orderRoutes", orderRoutes);

module.exports = rootRouter;
