import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { fetchMovieById } from '../../services/movieApi';
import { Wrapper, Title, Poster, NavItem } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>

      {movie && (
        <>
          <Wrapper>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <Title>{`${movie.title} (${movie.release_date.slice(
                0,
                4
              )})`}</Title>

              <ul>
                <li>
                  <h3>{`User score: ${
                    movie.vote_average.toFixed(2) * 10
                  }%`}</h3>
                </li>
                <li>
                  <h3>About:</h3>
                  <p>{movie.overview}</p>
                </li>
                <li>
                  <h3>Genres:</h3>
                  <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                </li>
              </ul>
            </div>
          </Wrapper>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>

            <li>
              <NavItem to="reviews">Reviews</NavItem>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
