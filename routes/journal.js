var express = require('express');
var router = express.Router();
var journalCtrl = require('../controllers/journal');

//GET /meals/new

router.get('/', isLoggedIn, journalCtrl.index);
router.get('/', isLoggedIn, journalCtrl.new);
router.post('/journalSubmit', isLoggedIn, journalCtrl.createMeal);
router.get('/', isLoggedIn, journalCtrl.show);
router.put('/', isLoggedIn, journalCtrl.update);
router.delete('/:id', isLoggedIn, journalCtrl.delete);


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;