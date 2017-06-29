const express = require('express');

const api = express.Router();

api.get('/', (req, res) => res.send({ success: true }));
api.use('/test', require('./test'));

module.exports = api;
