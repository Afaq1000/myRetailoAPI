require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Joi = require("joi");
const express = require("express");
const router = express.Router();



router.post("/", async (req, res) => {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already exists...");
    const { firstname,lastname, email, password } = req.body;
    user = new User({lastname,firstname, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // const jwtSecretKey = process.env.SECRET_KEY;
    const jwtSecretKey='${process.env.JWT_SECRET_KEY}';
    const token = jwt.sign(
      { _id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email },
      jwtSecretKey
    );
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
