const mongoose = require('mongoose');
const Story = mongoose.model('stories');

module.exports = app => {
  app.post('/api/stories', (req, res) => {
    let allowComments;

    if (req.body.allowComments) {
      allowComments = true;
    } else {
      allowComments = false;
    }

    const newStory = {
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
      allowComments
    };

    //Create Story
    new Story(newStory)
      .save()
      .then(story => {
        res.send(story);
      })
      .catch(err => {
        res.status(422).send(err);
      });
  });
};
