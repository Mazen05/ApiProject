import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/items/${movieId}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }, [movieId]);

    return (
        <div>
            {movie ? (
                <div className="movie-details">
                    <h1>{movie.title}</h1>
                    <img src={movie.poster} alt={movie.title} />
                    <p>{movie.fullplot}</p>
                    <p>Genres: {movie.genres.join(', ')}</p>
                    <p>Director: {movie.directors.join(', ')}</p>
                    <p>Cast: {movie.cast.join(', ')}</p>
                    <p>Prix: ${movie.imdb.rating}</p>
                </div>
            ) : (
                <p>Loading movie details...</p>
            )}
        </div>
    );
}

export default MovieDetails;
