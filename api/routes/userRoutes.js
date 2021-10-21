'use strict';

const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/consumers',user.list_all_consumers);
router.get('/salesagents',user.list_all_salesagents);

module.exports = router;