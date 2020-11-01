const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noiseSchema = new Schema({
    author: {type: String,required: true},
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User',
    },
    description: {type: String,},
    likes : {type: Number}
}, {timestamps: true})

const Noise = mongoose.model('Noise', noiseSchema)

module.exports = Noise;