const Joi = require('joi');

const productsValSchema = Joi.object().keys({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    quantity: Joi.number()
        .positive()
        .required(),

    price: Joi.number()
        .positive()
        .required(),

    brand:Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()

   
})

module.exports= productsValSchema;
