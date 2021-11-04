const products = require('./productsValidationSchema')
const user = require('./userValidationSchema')
const roles = require('./rolesValidationSchema')
const orders = require('./ordersValidationSchema')



module.exports = {
    products,
    user,
    roles,
    orders
}
