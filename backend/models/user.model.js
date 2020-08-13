const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {type: String, required: true, trim: true, unique: true, minlength: 3, maxlength: 15, },
    bio : {type: String, required: false, trim: true, maxlength: 100 },
    location : {type: String, required: false, trim: true, maxlength: 30 },
    contact : {type: String, required: false},
    likedNoises : {type: Array},
},{
    timestamps: true,
} )

const User = mongoose.model('User', userSchema)

module.exports = User