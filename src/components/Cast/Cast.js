import { fetchMovieCast } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(response => setMovieCast(response?.cast ?? null));
  }, [id]);

  return (
    <>
      <div>
        {movieCast && (
          <ul>
            {movieCast.map(({ id, name, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        )}

        {!movieCast && <p>There are no reviews for this movie yet.</p>}
      </div>
    </>
  );
};

export default Cast;
