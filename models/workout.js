var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var workoutSchema = new Schema({
    workout: String,
    count: Number,
    reps: Number,
})

module.exports = mongoose.model('Workout', workoutSchema)