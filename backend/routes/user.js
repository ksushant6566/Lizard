const router = require('express').Router();
let User = require('../models/user.model');

// GET ALL USERS

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(200).json('Error: ' + err));
});

// GET SPECIFIC USER

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(200).json("Error: "+ err));
})

// ADD USER

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const bio = req.body.bio;
    const location = req.body.location;
    const contact = req.body.contact;
    // const likedNoises = req.body.likedNoises;

    const newUser = new User({
        username,
        bio,
        location,
        contact,
    });

    newUser.save()
        .then((user) => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE (BIO, LOCATION, CONTACT)

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.location = req.body.location || user.location;
            user.bio = req.body.bio || user.bio;
            user.contact = req.body.contact || user.contact;

            user.save()
                .then(() => res.json("lizard updated"))
                .catch(err => res.status(200).json("Error: "+ err))

        } ).catch(err => res.status(200).json("Error: "+ err))
} );

// LIKE / DISLIKE

router.route('/like/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            let updatedlikedNoises = user.likedNoises;
            const isLiked = updatedlikedNoises.some(noiseId => noiseId._id == req.body.likedNoise)

            if(!isLiked){
                updatedlikedNoises.push(req.body.likedNoise)
                user.likedNoises = updatedlikedNoises;
    
                user.save()
                    .then(() => res.json("Liked"))
                    .catch(err => res.status(200).json("Error: "+err))
            }
            else {
                updatedlikedNoises = user.likedNoises.filter((ln) => { return ln._id != req.body.likedNoise})
                user.likedNoises = updatedlikedNoises;
                
                user.save()
                    .then(() => res.json("Disliked"))
                    .catch(err => res.status(200).json("Error: "+err))
            }

        }).catch(err => res.status(200).json("Error: "+err))
});

// FOLLOW / UNFOLLOW ANOTHER USER

router.route('/follow/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            let updatedfollows = user.follows;
            const isFollowed = updatedfollows.some(id => id._id == req.body.followId )

            if(isFollowed) {
                updatedfollows = user.follows.filter(id => id._id != req.body.followId)
                user.follows = updatedfollows
            }else {
                updatedfollows.push(req.body.followId);
                user.follows = updatedfollows
            }

            user.save()
                .then(user => res.json(user))
                .catch(err => res.status(200).json("Error : " + err))
        })
        .catch(err => res.status(200).json(err))

    User.findById(req.body.followId)
        .then(user => {
            let updatedfollowers = user.followers;
            const isFollowed = updatedfollowers.some( id => id._id == req.params.id )

            if(isFollowed) {
                updatedfollowers = user.followers.filter(id => id._id != req.params.id)
                user.followers = updatedfollowers
            }else {
                updatedfollowers.push(req.params.id);
                user.followers = updatedfollowers
            }

            user.save()
                // .then(() => res.json("successful"))
                // .catch(err => res.status(200).json("error"))
        })
        .catch(err => res.status(200).json(err))
})

// DELETE USER

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("user deleted"))
        .catch(err => res.status(200).json("Error: "+err))
})

module.exports = router;