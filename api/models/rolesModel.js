
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RolesSchema = new Schema({
  id: {
    type: String,
  },

  value: {
    type: [{
      type: String,
      enum: ['SuperAdmin', 'SaleAgent', 'Consumer']
    }]
  }

});

module.exports = mongoose.model('Roles', RolesSchema);