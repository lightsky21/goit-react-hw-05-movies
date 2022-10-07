import { fetchMovieReviews } from '../../services/movieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(response =>
      setMovieReviews(response?.results ?? [])
    );
  }, [id]);

  return (
    <>
      <div>
        {movieReviews.length > 0 && (
          <ul>
            {movieReviews.map(({ id, content, author }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}

        {movieReviews.length === 0 && (
          <p>There are no reviews for this movie yet.</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
