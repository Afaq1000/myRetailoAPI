const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. Not authorized...");
  try {
    const jwtSecretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, jwtSecretKey);
    req.user = payload;
    //console.log(payload)
    next();
  } catch (error) {
    res.status(400).send("Invalid auth token...");
  }
};
