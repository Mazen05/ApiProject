const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    plot: {
        type: String,
        required: true
    },
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    writers: [String],
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: Date,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],
    type: String,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number
        },
        lastUpdated: Date
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
