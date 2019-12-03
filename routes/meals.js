var express = require('express');
var router = express.Router();
var mealsCtrl = require('../controllers/meals');


//GET /meals/new

router.get('/', mealsCtrl.index);
router.get('/new',  mealsCtrl.new);
router.get('/:id', mealsCtrl.show);
router.post('/:id', mealsCtrl.update);
router.post('/', mealsCtrl.create);
router.delete('/:id', mealsCtrl.delete);

module.exports = router;