const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema([{
  name: String,
  email: String,
}])

module.exports = mongoose.model('User', userSchema);