var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
name: String, 
email: String,
age: Date,
gender: String,
height: Number,
bodyweight: Number,
goals: String,
googleId: String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User', userSchema )