var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var mealSchema = new Schema({
    mealType: { type: String,
     enum: ['breakfast', 'lunch', 'dinner'] },
    meal: String,
    calories: Number,
    time: String,
    day: { type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }
})


 module.exports = mongoose.model('Meal', mealSchema)