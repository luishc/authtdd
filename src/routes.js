const routes = require('express').Router();
const User = require('./app/models/User');

User.create({nome: 'Luis ENV'});

module.exports = routes;