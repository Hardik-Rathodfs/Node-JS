import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]); // Initialize state with an empty array
  const [error, setError] = useState(null); // Track fetch errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:8080/allmovie');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data); // Update state with fetched movies
      } catch (error) {
        setError(error.message); // Update error state if fetch fails
      }
    };

    fetchMovies(); // Invoke fetch function inside useEffect
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>Movies List</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p> // Display error message
      ) : (
        <ul>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <li key={index}>{movie.title}</li> // Render movie list
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Home;
