var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var workoutSchema = new Schema({
    workout: { type: String,
    enum: ["Push-Ups", "Sit-Ups", "Jumping Jacks", "Leg-Ups", "Curls", "Jog", "Jump Rope", "Knee-Highs"]
},
    sets: Number,
    reps: Number,
    duration: Number
})

module.exports = mongoose.model('Workout', workoutSchema)