'use strict';
/*module.exports = function(app) {
  let user = require('../controllers/userController');

  // user Routes
  app.route('/consumers')
    .get(user.list_all_consumers)

  app.route('/saleagents')
    .get(user.list_all_saleagents)
    
  

};*/

const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

router.get('/consumers',user.list_all_consumers);
router.get('/salesagents',user.list_all_salesagents);

module.exports = router;