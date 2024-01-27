import React, { useEffect,useState } from 'react';
import fetchMovies from '../src/utils/api';
import Search from './components/pages/home/search';

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
    <Search />
  </div>
  );
};

export default App;
