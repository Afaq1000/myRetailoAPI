const mongoose = require('mongoose');
const Task = require('../api/models');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/myRetailodb'); 
async function any(){
await mongoose.connect(
    `mongodb+srv://afaq4542:Planec130@myretailocluster.si0n3.mongodb.net/myRetailoDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
);
};
any();