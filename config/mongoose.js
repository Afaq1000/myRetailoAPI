mongoose = require('mongoose'),
Task = require('../api/models'), 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myRetailodb'); 
