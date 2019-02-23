const routes = require('express').Router();
const sessionRoute = require('./sessionRoutes');

routes.use('/sessions', sessionRoute);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Star Wars API!' });
});

module.exports = routes;