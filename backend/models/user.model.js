const mongoose = require('mongoose')

const Schema = mongoose.Schema

const likedNoiseSchema = new Schema({
    noiseId : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : 'Noise',
    },
},
{
    timestamps : true,
})

const userRefSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
},{
    timestamps : true,
})

const userSchema = new Schema({
    username : {type: String, required: true, trim: true, unique: true, minlength: 3, maxlength: 15, },
    bio : {type: String, trim: true, maxlength: 100 },
    location : {type: String, trim: true, maxlength: 30 },
    contact : {type: String, },
    likedNoises : [likedNoiseSchema],
    followers : [userRefSchema],
    follows : [userRefSchema],
},{
    timestamps: true,
} )

const User = mongoose.model('User', userSchema)

module.exports = User