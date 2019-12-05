var Meal = require('../models/meal');
var Workout = require('../models/workout');

module.exports = {
    index, 
    show,
    new: newWorkout,
    create, 
    update, 
    delete: deleteWorkout
}

function index(req, res) {
    res.render('workouts', {title: 'Workout Planner'});
    }
  

function show(res, req) { 

}

function newWorkout(res, req) {

}

function create(res, req) {

}
function update(res, req) {

}
function deleteWorkout(res, req) {
    
}