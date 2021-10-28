const Joi = require("joi");
const Validators = require("../validators");

module.exports =  (validator) => {
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);

  return async (req, res, next) => {
    try {
      const validated = await Validators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err) return res.status(422).json(err.message);
    }
  };
};
