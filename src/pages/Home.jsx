import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data from JSON server
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;