import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchSearch } from '../../services/movieApi';

const Movies = () => {
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      fetchSearch(query).then(response => {
        setRequestedMovies(response?.results ?? []);
        setNoResult(!response?.results?.length);
      });
    }
  }, [searchParams]);

  return (
    <main>
      <SearchBox />
      {requestedMovies.length > 0 && <MoviesList items={requestedMovies} />}
      {noResult && <p>There was nothing found. Try to find something else</p>}
    </main>
  );
};

export default Movies;
