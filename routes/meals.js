var express = require('express');
var router = express.Router();
var mealsCtrl = require('../controllers/meals');

//GET /meals/new

router.get('/', isLoggedIn, mealsCtrl.index);
router.get('/', isLoggedIn, mealsCtrl.new);
router.post('/mealSubmit', isLoggedIn, mealsCtrl.createMeal);
router.get('/', isLoggedIn, mealsCtrl.show);
router.put('/', isLoggedIn, mealsCtrl.update);
router.delete('/', isLoggedIn, mealsCtrl.delete);


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;