const mongoose = require('mongoose');
const { Schema } = mongoose; // same as schema = mongoose.schema

const userSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

mongoose.model('users', userSchema);
