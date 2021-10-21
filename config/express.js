let express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//let routes = require('../api/routes/index.js'); //importing route
//routes(app); //register the route

//app.use('/', require('../api/routes/productsRoutes.js'));
//app.use('/users', require('../api/routes/userRoutes.js'))


//Now in server.js adding route as a middleware.
var rootRouter = require('../api/routes');
app.use( '/',rootRouter);


app.listen(port);

console.log('todo list myRetailo API server started on: ' + port);