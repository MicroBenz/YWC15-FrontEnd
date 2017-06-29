const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebook_id: {
    type: String,
    unique: true
  },
  name: {
    first: String,
    last: String
  }
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', userSchema);
