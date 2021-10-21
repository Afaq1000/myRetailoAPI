'use strict';

const express = require('express');
const router = express.Router();
const product = require('../controllers/productsController');

router.get('/products',product.list_all_products);
router.post('/products',product.create_a_product);
router.get('/product/:productId',product.read_a_product);
router.delete('/product/:productId',product.delete_a_product);

module.exports = router;