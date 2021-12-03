"use strict";
const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
const user = require("../controllers/userController");

router.get("/consumers", auth, user.list_all_consumers);
router.get("/salesagents",auth, user.list_all_salesagents);
module.exports = router;
