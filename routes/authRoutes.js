const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google', //starts oauth process. happens when user login with google
    passport.authenticate('google', {
      scope: ['profile', 'email'] //tells google what access we want
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  //User here has the ggl code, ggl strtgy notices and exchanges code for profile.

  app.get('/api/logout', (req, res) => {
    req.logout(); //passport attached this to req object auto. Kills cookie 
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};