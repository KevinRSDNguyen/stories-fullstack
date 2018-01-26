const mongoose = require('mongoose');
const { Schema } = mongoose; 

const StorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'public',
    required: true
  },
  allowComments: {
    type: Boolean,
    default: true
  },
  comments: [{
    commentBody: {
      type: String,
      required: true
    },
    commentDate: {
      type: Date,
      default: Date.now()
    }
  }],
  date: {
    type: Date,
    default: Date.now()
  }
});

mongoose.model('stories', StorySchema);