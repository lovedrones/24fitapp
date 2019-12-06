var Meal = require('../models/meal');


module.exports = {
    index, 
    show,
    new: newMeal,
    createMeal, 
    update, 
    delete: deleteMeal
}

function index(req, res) {
    Meal.find({}, function(err, meals) {
        res.render('meals', {title: 'Meal Planner', meals });
    })
    }
  
function show(req, res) { 
console.log(req.params.id);
Meal.findById(req.params.id, function(err, meal) {
    console.log(meal)
    res.render('meals/show', {title: `Meal # ${meal_id}`, meal}
)})
}


function newMeal(req, res) {

}

function createMeal(req, res) {
    var meal = new Meal(req.body);
    meal.save(function(err, meals){
        if(err) return res.redirect('/');
        console.log(meal);
        res.redirect('/meals');
    }) 

}
function update(req, res) {
Meal.findById(req.params.id, function(err, meal){
    meal.push(req.body);
    meal.save(function(err){
        res.render('/')
    })
})
}
function deleteMeal(req, res) {
    
}