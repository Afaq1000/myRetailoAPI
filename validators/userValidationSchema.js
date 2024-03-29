const Joi = require('joi');

const userValSchema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email:Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    pin: Joi.number()
        .integer()
        .positive()
        .required(),

    verified: Joi.boolean()
        .required()    

   
})

module.exports= userValSchema;
