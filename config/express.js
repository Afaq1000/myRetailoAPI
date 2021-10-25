require('../middlewares')
let express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Now in server.js adding route as a middleware.
const rootRouter = require("../api/routes");
app.use(rootRouter);

app.listen(port);

console.log(" myRetailo API server started on: " + port);



//

