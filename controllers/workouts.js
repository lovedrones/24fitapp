var Workout = require('../models/workout');

module.exports = {
    index, 
    show,
    new: newWorkout,
    createWorkout, 
    update, 
    delete: deleteWorkout
}


function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts', {title: 'Workout Planner', workouts });
    })
    }
  
function show(req, res) { 
console.log(req.params.id);
Workout.findById(req.params.id, function(err, workout) {
    console.log(workout)
    res.render('workouts/show', {title: `Workout # ${workouts_id}`, workout}
)})
}


function newWorkout(req, res) {

}

function createWorkout(req, res) {
    console.log(req.body)
    var workout = new Workout(req.body);
    workout.save(function(err, workout){
        if(err) return res.redirect('/');
        console.log(workout);
        res.redirect('/workouts');
    }) 

}
function update(req, res) {
Workout.findById(req.params.id, function(err, workout){
    workout.push(req.body);
    workout.save(function(err){
        res.render('/')
    })
})
}
function deleteWorkout(req, res) {
    
}