var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    password:String
});

module.exports = mongoose.model('user', schema, 'users');