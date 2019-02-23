const sessionRoute = require('express').Router();
const SessionController = require('../controllers/SessionController');

sessionRoute.post('/', SessionController.store);

module.exports = sessionRoute;