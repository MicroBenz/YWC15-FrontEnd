const express = require('express');
const slack = require('../utils/slack');

const testRoutes = express.Router();

testRoutes.get('/', (req, res) => res.send({ data: 'test api' }));
testRoutes.post('/slack/:id', testSlack);

function testSlack(req, res) {
  let promise;
  const { id } = req.params;
  if (id === 'report') {
    promise = slack.reportRegistrationStat();
  } else if (id === 'trigger') {
    promise = slack.triggerRegister(req.body.role || 'programmer');
  } else if (id === 'complete') {
    promise = slack.completeRegistration('John Farmer', req.body.role || 'programmer');
  }
  promise
    .then(() => res.send({ success: true }))
    .catch(e => res.error(e));
}

module.exports = testRoutes;
