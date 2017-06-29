const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const camperSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  role: {
    type: String,
    enum : ['programmer', 'designer', 'content', 'marketing'],
  }
}, { timestamps: true, collection: 'Camper' });

module.exports = mongoose.model('Camper', camperSchema);
