const Router = require('express').Router
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/person', usersRouter);

module.exports = routes;


