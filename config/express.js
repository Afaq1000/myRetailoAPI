require('dotenv').config()
const signUp = require("../api/routes/signUp");
const signIn = require("../api/routes/signIn");
const cors = require("cors");

// require("../middlewares");
let express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

app.options('*', cors()) // include before other routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const rootRouter = require("../api/routes");
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

app.use(rootRouter); //mounting instance of express.Router on the app
app.use("/signUp", signUp);
app.use("/signIn", signIn);

app.listen(port);

console.log(" myRetailo API server started on: " + port);
