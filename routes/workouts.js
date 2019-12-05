var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');


/* GET users listing. */
router.get('/', isLoggedIn, workoutsCtrl.index);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;
