
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoleUserSchema = new Schema({
  id: {
    
  },

  user_id: {
    
  },
  role_id: {
    
}
});

module.exports = mongoose.model('RoleUser', RoleUserSchema);