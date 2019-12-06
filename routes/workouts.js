var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');


/* GET users listing. */
router.get('/', isLoggedIn, workoutsCtrl.index);
router.get('/', isLoggedIn, workoutsCtrl.new);
router.post('/workoutSubmit', isLoggedIn, workoutsCtrl.createWorkout);
router.get('/', isLoggedIn, workoutsCtrl.show);
router.put('/', isLoggedIn, workoutsCtrl.update);
router.delete('/', isLoggedIn, workoutsCtrl.delete);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}
module.exports = router;
