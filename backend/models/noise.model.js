const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noiseSchema = new Schema({
    author: {type: String,required: true},
    authorId: {type: String,},
    description: {type: String,},
    likes : {type: Number}
}, {timestamps: true})

const Noise = mongoose.model('Noise', noiseSchema)

module.exports = Noise;