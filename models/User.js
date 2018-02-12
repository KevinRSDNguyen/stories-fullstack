const mongoose = require('mongoose');
const { Schema } = mongoose; // same as schema = mongoose.schema

const userSchema = new Schema({
  googleId: String,
  credits: {type: Number, default: 0}
});

mongoose.model('users', userSchema);
