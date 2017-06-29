const mongoose = require('mongoose');
const User = require('./User');
const Camper = require('./Camper');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ywc15');

module.exports = {
  User,
  Camper
};
