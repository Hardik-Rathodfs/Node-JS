import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:8080/allmovie');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data);
        console.log(data);
        
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Movies List</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="card-grid">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div key={index} className="card">
                <img
                  src={`http://localhost:8080/assets/${movie.poster}`}
                  alt={movie.title}
                  className="card-img" width="150px" heigth="150px"
                />
                <div className="card-content">
                  <h3 className="card-title">{movie.title}</h3>
                  <p><strong>Year:</strong> {movie.year}</p>
                  <p><strong>Rating:</strong> {movie.rating}/10</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
