const express = require("express");
const rootRouter = express.Router();

const productsRoutes = require("./productsRoutes.js");
const usersRoutes = require("./userRoutes.js");


rootRouter.use("/productsRoutes", productsRoutes);
rootRouter.use("/userRoutes", usersRoutes);

module.exports = rootRouter;
