var router = require('express').Router();
var passport = require('passport');
var userCtrl = require('../controllers/users')

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', { title: '2  FIT 4 ME', user: req.user});
});

router.get('/', userCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email']}
))

router.get('/oauth2callback',passport.authenticate(
  'google',
  { 
    successRedirect: '/24fitme',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
