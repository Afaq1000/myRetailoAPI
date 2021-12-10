'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')
const product = require('../controllers/productsController');
const validator = require('../../middlewares/validatorMiddleware')

router.get('/products'/*,auth*/,product.list_all_products);
router.post('/products',auth,validator('products'),product.create_a_product);
router.get('/products/:productId',auth,product.read_a_product);
router.delete('/products/:productId',auth,product.delete_a_product);
module.exports = router;