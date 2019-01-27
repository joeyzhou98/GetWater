const express = require('express');
const router = express.Router();

// Fountain Model
const fountain = require('../../models/fountain');

//GET all fountains 

router.get('/', (req, res) => {
    fountain.find().then(
        fountains => res.json(fountains) 
    );
});

//POST
router.post('/', (req, res) => {
    const newFountain = new fountain({
        location: req.body.location,
        description: req.body.description,
        lat: req.body.lat,
        lng: req.body.lng
    });

    newFountain.save().then(fountain => res.json(fountain))
});


module.exports = router; 