// User.js in models folder
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  fullName: { type: String },
  nicNumber: { type: String },
  contactNumber: { type: String },
  address: { type: String },
  birthday: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
