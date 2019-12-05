var express = require('express');
var router = express.Router();
var mealsCtrl = require('../controllers/meals');

//GET /meals/new

router.get('/', isLoggedIn, mealsCtrl.index);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;