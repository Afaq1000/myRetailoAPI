'use strict';
/*module.exports = function(app) {
  let product = require('../controllers/productsController');

  // product Routes
  app.route('/products')
    .get(product.list_all_products)
    .post(product.create_a_product);


  app.route('/products/:productId')
    .get(product.read_a_product)
    .delete(product.delete_a_product);
};
*/

const express = require('express');
const router = express.Router();
const product = require('../controllers/productsController');

router.get('/products',product.list_all_products);
router.post('/products',product.create_a_product);
router.get('/products/:productId',product.read_a_product);
router.delete('/products/:productId',product.delete_a_product);

module.exports = router;