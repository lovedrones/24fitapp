var Meal = require('../models/meal');
var Workout = require('../models/workout');

module.exports = {
    index, 
    show,
    new: newMeal,
    create, 
    update, 
    delete: deleteMeal
}

function index(req, res) {
    res.render('meals', {title: 'Meal Planner'});
    }
  
function show(res, req) { 

}

function newMeal(res, req) {

}

function create(res, req) {

}
function update(res, req) {

}
function deleteMeal(res, req) {
    
}