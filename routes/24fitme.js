var express = require('express');
var router = express.Router();
var FITmeCtrl = require('../controllers/24fitme');

router.get('/', isLoggedIn, FITmeCtrl.index);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;

