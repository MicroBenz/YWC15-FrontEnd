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
  },
  avatar_image: String,
  is_camper: Boolean,
  role: {
    type: String,
    enum: ['programmer', 'designer', 'marketing', 'content']
  },
  is_grader: Boolean
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', userSchema);
