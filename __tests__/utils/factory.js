const factory = require('factory-girl');
const User = require('../../src/app/models/User');

factory.define('User', User,{
    nome: 'Luis',
    email: 'lhcnascimento@gmail.com',
    password: '123456'
});

module.exports = factory;