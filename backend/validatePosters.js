const mongoose = require('mongoose');
const axios = require('axios');
const Movie = require('./models/Movies'); // Assurez-vous que le chemin vers le modèle est correct

async function validatePosters() {
    await mongoose.connect('mongodb+srv://mazen:mazen@cluster0.h4luusb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const movies = await Movie.find();
    const invalidMovies = [];

    for (let movie of movies) {
        console.log(`Checking poster URL: ${movie.poster}`);
        try {
            const response = await axios.get(movie.poster);
            if (response.status !== 200) {
                console.log(`Invalid poster for movie ID: ${movie._id}, URL: ${movie.poster}`);
                invalidMovies.push(movie._id);
            }
        } catch (error) {
            console.log(`Error fetching poster for movie ID: ${movie._id}, URL: ${movie.poster}`);
            invalidMovies.push(movie._id);
        }
    }

    console.log('Invalid Movies:', invalidMovies);
    if (invalidMovies.length > 0) {
        await Movie.deleteMany({ _id: { $in: invalidMovies } });
        console.log('Deleted invalid movies');
    } else {
        console.log('No invalid movies found');
    }

    mongoose.connection.close();
}

validatePosters().catch(err => console.error(err));
