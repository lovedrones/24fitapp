var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var mealSchema = new Schema({
    mealType: { type: String,
     enum: ['breakfast', 'lunch', 'dinner']},
    meal: String,
    calories: Number,
    time: String,
    date: { type: Date, default: Date.now }
})


 module.exports = mongoose.model('Meal', mealSchema)