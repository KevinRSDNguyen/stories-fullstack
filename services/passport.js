const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => { //creates cookie for us from a user
  done(null, user.id); // dont use googles id since maybe multiple oauths from fb, etc
});

passport.deserializeUser((id, done) => { //turn cookie back to user
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      //route user will be sent to after granting permission
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const image = profile.photos[0].value.substring(0,
        profile.photos[0].value.indexOf('?'));

      const newUser = {
        googleID: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        image
      };
      //Check for existing user
      User.findOne({ googleID: profile.id })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            new User(newUser).save()
              .then(user => {
                done(null, user);
              });
          }
        })
    }
  )
);