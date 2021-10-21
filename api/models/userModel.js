'use strict';

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the user'
      },
    
      email: {
        type: String,
        required: 'Kindly enter email'
      },
    
      password: {
        type: String,
        required: 'Kindly enter password'
      },
    
      pin: {
        type: Number,
        required: 'Kindly enter pin'
      },
    
      verified: {
       type: Boolean,
       required: true,
       default: false
      }
});

module.exports = mongoose.model('User', UserSchema);