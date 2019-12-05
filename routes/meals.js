var express = require('express');
var router = express.Router();
var mealsCtrl = require('../controllers/meals');

router.get('24fitme/meals', function(req, res, next) { 
    res.render('24fitme/meals', { title: 'Meal Planner' });
  });

//GET /meals/new

router.get('24fitme/meals', mealsCtrl.index);
router.get('/new',  mealsCtrl.new);
router.get('/:id', mealsCtrl.show);
router.post('/:id', mealsCtrl.update);
router.post('/', mealsCtrl.create);
router.delete('/:id', mealsCtrl.delete);

module.exports = router;