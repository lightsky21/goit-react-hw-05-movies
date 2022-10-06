import PropTypes from 'prop-types';
import { Item } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

function MoviesList({ items }) {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <Item to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title}</h2>
          </Item>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
