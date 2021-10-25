'use strict';

const express = require('express');
// const productsValSchema = require('../../validators/productsValidationSchema');
const router = express.Router();
const product = require('../controllers/productsController');

const validator = require('../../middlewares/validatorMiddleware')


router.get('/products',product.list_all_products);
router.post('/products',validator('products'),product.create_a_product);
router.get('/product/:productId',product.read_a_product);
router.delete('/product/:productId',product.delete_a_product);

module.exports = router;