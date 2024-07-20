const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');  // Assurez-vous que ce chemin est correct

// GET all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// GET a single movie by id
router.get('/:movieId', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) return res.status(404).send('Movie not found');
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// POST a new movie
router.post('/', async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const movie = await newMovie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
