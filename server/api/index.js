const express = require('express');

const api = express.Router();

api.use('/test', require('./test'));

module.exports = api;
