const Joi = require('joi');

const ordersValSchema = Joi.object().keys({
    delivery_date: Joi.date()
        .required(),

    placed_at : Joi.date()
        .required(),

    order_type : Joi.string()
        .alphanum()
        .required(),

    quantity : Joi.number()
        .required(),
    
    product_id: Joi.string()
        .required(),
             
})

module.exports= ordersValSchema;

