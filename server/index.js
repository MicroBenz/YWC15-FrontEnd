const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

const config = require('./config');
require('./cron');

passport.use(new FacebookTokenStrategy({
  clientID: config.FACEBOOK_ID,
  clientSecret: config.FACEBOOK_SECRET
}, (token, refreshToken, profile, next) => next(null, profile)))

const app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', require('./api'));

app.listen(config.port, () => console.log(`API Start at Port ${config.port}`));
