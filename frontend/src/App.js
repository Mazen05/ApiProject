import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/movies/:movieId" element={isAuthenticated ? <MovieDetails /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
