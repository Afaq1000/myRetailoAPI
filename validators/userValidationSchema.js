const Joi = require('joi');

const userValSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

     repeat_password: Joi.ref('password'),

    pin: Joi.number()
        .integer()
        .positive()
        .required(),

    verified: Joi.number()
        .integer()
        .required()    

   
})

module.exports= userValSchema;