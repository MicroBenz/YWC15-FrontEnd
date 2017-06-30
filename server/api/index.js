const express = require('express');

const api = express.Router();

api.use('/auth', require('./auth'));
api.use('/test', require('./test'));

module.exports = api;
