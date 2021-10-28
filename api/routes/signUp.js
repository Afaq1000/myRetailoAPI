//Steps for Authentication & Autorization
//user model
//signUp => Hash Password => public
//signIn => JWT => public
//protect apis/crud endpoints( will be private we protect them using a )=> middleware => Authorization

//Steps for SignUp
// joi validation
//does user exist?
//create new user
//Hash Password => bcrypt ,install bcrypt
//save user



const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const  User  = require("../models/userModel");
const Joi = require("joi");
const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  const schema = Joi.object({
    // username: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //console.log(error)
  //console.log(req.body)

  let user = await User.findOne({email : req.body.email});
  if (user) return res.status(400).send("User already exists...");
  const {email, password } = req.body;
  console.log(req.body)

  user = new User({email, password });
  //console.log(user)
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  //console.log(user.password)
  await user.save();

  //const jwtSecretKey = process.env.TODO_APP_JWT_SECRET_KEY;
  //const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, jwtSecretKey)

  //res.send(token);
});

module.exports = router;