const router = require('express').Router()
let Noise = require('../models/noise.model')

// GET ALL NOISES

router.route('/').get((req, res) => {
    Noise.find()
        .then(noises => res.json(noises))
        .catch(err => res.status(400).json("Error: " + err))
})

// GET SPECIFIC NOISE

router.route('/:id').get((req, res) => {
    const ID = req.params.id;
    Noise.findById(ID)
        .then(noise => res.json(noise))
        .catch(err => res.status(400).json("Error: " + err))
} )

// ADD NOISE

router.route('/add').post((req, res) => {
    const author = req.body.username;
    const authorId = req.body.userId;
    const description = req.body.description;
    const likes = 0;
    const newNoise = new Noise({
        author,
        authorId,
        description,
        likes
    })

    newNoise.save()
        .then(() => res.json("noise added"))
        .catch(err => res.status(400).json("Error: " + err))
})

// DELETE NOISE

router.route('/:id').delete((req, res) => {
    Noise.findByIdAndDelete(req.params.id)
        .then(() => res.json("noise deleted"))
        .catch(err => res.status(400).json("Error: " + err))
})

//  UPDATE NOISE (DESCRIPTION)

router.route('/update/:id').post((req, res) => {
    Noise.findById(req.params.id)
        .then(noise => {
            noise.description = req.body.description;
            noise.author = req.body.username || noise.author;
            noise.save()
                .then(() => res.json("noise updated"))
                .catch((err) => res.status(400).json("Error: "+ err))
        }).catch(err => res.status(400).json("Error: "+ err))
})

// UPDATE NOISE (LIKES) (LIKE)

router.route('/like/:id').post((req, res) => {
    Noise.findById(req.params.id)
        .then(noise => {
            noise.likes = Number(noise.likes) + 1
            noise.save()
                .then(() => res.json("you liked a noise"))
                .catch(err => res.status(400).json("Error: "+ err))
        }).catch(err => res.json("Error: "+err).status(400))
})

//  UPDATE NOISE (LIKES) (DISLIKE)

router.route('/dislike/:id').post((req, res) => {
    Noise.findById(req.params.id)
        .then(noise => {
            noise.likes = Number(noise.likes) - 1
            noise.save()
                .then(() => res.json("you disliked a noise"))
                .catch(err => res.status(400).json("Error: "+ err))
        }).catch(err => res.json("Error: "+err).status(400))
})


module.exports = router;
