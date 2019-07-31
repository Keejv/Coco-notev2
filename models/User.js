const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  type: String,
  require: true
},
email: {
  type: String,
  required: true,
  unique: true
},
avatar: {
  type: String
},
date: {
  type: Date,
  default: Date.now
}
);

module.exports = User = mongoose.model('User, UserSchema')