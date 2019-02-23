'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

userSchema.methods.checkPassword = async function(password){
    var check = await bcrypt.compare(password, this.password);
    return check;
}

userSchema.methods.generateToken = function(){
    return jwt.sign({ id: this.id }, process.env.APP_SECRET)
}

module.exports = mongoose.model('users', userSchema);