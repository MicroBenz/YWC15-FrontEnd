const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');
const slack = require('../utils/slack');

const authRoutes = express.Router();
authRoutes.post('/login/camper', passport.authenticate('facebook-token', { session: false }), handleCamperLogin);

function handleCamperLogin(req, res) {
  const { id, name, photos } = req.user;
  User.findOne({ facebook_id: id})
    .then((user) => {
      if (!user) {
        slack.triggerRegister(req.body.role);
        return User.create({
          name: {
            first: name.givenName,
            last: name.familyName,
          },
          facebook_id: id,
          avatar_image: photos[0].value,
          is_camper: true,
          role: req.body.role
        }).lean()
      }
      return user;
    })
    .then((user) => {
      const token = jwt.sign(user, config.JWT_SECRET);
      return res.send({ token });
    })
    .catch(e => res.status(500).send(e));
}

module.exports = authRoutes;
