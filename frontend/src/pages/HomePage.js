import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/items')
            .then(response => {
                console.log(response.data);  // Ajoutez ceci pour vérifier les données
                setMovies(response.data);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div>
            <h1>Quel film t'intéresse ?</h1>
            <div className="movies-container">
                {movies.map(movie => (
                    <div key={movie._id} className="movie-card">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <Link to={`/movies/${movie._id}`}>Voir plus</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
