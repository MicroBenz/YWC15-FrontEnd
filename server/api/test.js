const express = require('express');

const testRoutes = express.Router();

testRoutes.get('/', (req, res) => res.send({ data: 'test api' }));

module.exports = testRoutes;
