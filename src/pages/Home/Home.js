import { useEffect, useState } from 'react';
import { fetchTrending } from '../../services/movieApi';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setMovies(response?.results ?? []));
  }, []);

  return (
    <main>
      <h1>Popular now</h1>
      <MoviesList items={movies} />
    </main>
  );
};

export default Home;
