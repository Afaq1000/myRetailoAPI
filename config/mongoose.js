
mongoose = require('mongoose'),
Task = require('../api/models'), //created models loading here


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myRetailodb'); //connection string

//add service layer for authentication.