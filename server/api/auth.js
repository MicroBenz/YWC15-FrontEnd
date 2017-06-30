const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');
const slack = require('../utils/slack');
const registerStat = require('../utils/registerStat');

const authRoutes = express.Router();
authRoutes.post('/login/camper', passport.authenticate('facebook-token', { session: false }), handleCamperLogin);

function handleCamperLogin(req, res) {
  const { id, name, photos } = req.user;
  User.findOne({ facebook_id: id})
    .then((user) => {
      if (!user) {
        return Promise.all([User.create({
          name: {
            first: name.givenName,
            last: name.familyName,
          },
          facebook_id: id,
          avatar_image: photos[0].value,
          is_camper: true,
          role: req.body.role
        }), true]);
      }
      return [user, false];
    })
    .then(([user, isFirstRegister]) => {
      if (isFirstRegister) {
        registerStat.getRegistrantCountByRole(req.body.role)
          .then(count => slack.triggerRegister(req.body.role, count));
      }
      const token = jwt.sign(user, config.JWT_SECRET);
      return res.send({ token });
    })
    .catch(e => res.status(500).send(e));
}

module.exports = authRoutes;
