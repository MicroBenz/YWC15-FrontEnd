const express = require('express');
const slack = require('../utils/slack');

const testRoutes = express.Router();

testRoutes.get('/', (req, res) => res.send({ data: 'test api' }));
testRoutes.post('/slack', testSlack);

function testSlack(req, res) {
  slack.triggerRegister()
    .then(() => res.send({ success: true }))
    .catch(e => res.error(e));
}

module.exports = testRoutes;
