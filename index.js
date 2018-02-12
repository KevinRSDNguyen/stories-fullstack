const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//Load models
require('./models/User');
require('./services/passport'); 


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //make cookie last 30days in ms
    keys: [keys.cookieKey] //used to encrypt. I typed in gibberish
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Load routes
require('./routes/authRoutes')(app); 

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);