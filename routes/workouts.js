var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
