import React, { useEffect,useState } from 'react';
import fetchMovies from '../src/utils/api';

const App = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGenres = await fetchMovies();
        const genresArray = fetchedGenres.genres;
        setGenres(genresArray);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h2>Movie Genres</h2>
    {genres.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default App;
