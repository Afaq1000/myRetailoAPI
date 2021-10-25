let express = require("express"),
  app = express()

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
 


