const express = require('express');

const { User } = require('../models');
const slack = require('../utils/slack');

const testRoutes = express.Router();

testRoutes.get('/', testMongoose);
testRoutes.post('/slack/:id', testSlack);

function testMongoose(req, res) {
  User.find().then(user => res.send(user));
}

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
