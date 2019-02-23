'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    password_hashed: {
        type: String
    }
});

module.exports = mongoose.model('users', userSchema);