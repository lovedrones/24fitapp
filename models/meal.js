var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var breakfastSchema = new Schema({
    meal: String,
    calories: Number,
    time: Number
}) 

var lunchSchema = new Schema({
    meal: String,
    calories: Number,
    time: Number
})

var dinnerSchema = new Schema({
    meal: String,
    calories: Number,
    time: Number
})

var mealSchema = new Schema({
    breakfast: [breakfastSchema],
    lunch: [lunchSchema],
     dinner:[dinnerSchema],
    date: { type: Date, default: Date.now }
})


 module.exports = mongoose.model('Meal', mealSchema)