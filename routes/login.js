var express = require('express');
var router = express.Router();
var passport= require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('24fitme/index', { title: '24 FIT-me' });
});

router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email']}
))

router.get('/oauth2callback',passport.authenticate(
  'google',
  { 
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});


module.exports = router;