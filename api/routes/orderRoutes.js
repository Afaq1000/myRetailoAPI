const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth')
const order = require('../controllers/orderController');
const validator = require('../../middlewares/validatorMiddleware')


router.get('/orders',auth, order.list_all_Orders);

router.post('/orders', auth, validator('orders'),order.create_a_Order);

router.get('/orders/:orderId', auth, order.read_a_Order);

router.delete('/orders/:orderId', auth, order.delete_a_Order);

module.exports = router;