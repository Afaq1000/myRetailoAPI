const Joi = require('joi');

const rolesValSchema = Joi.object({
    id: Joi.string()
        .min(3)
        .max(30)
        .required(),


    value: Joi.string()
        .valid("SuperAdmin", "SaleAgent", "Consumer")
        .required()
   
})

module.exports= rolesValSchema;
