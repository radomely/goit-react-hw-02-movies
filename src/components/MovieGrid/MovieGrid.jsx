import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ items }) =>
  items.length > 0 ? (
    <ul className={styles.movieGrid}>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard {...item} />
        </li>
      ))}
    </ul>
  ) : (
    <h1>No matching results!</h1>
  );
MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default MovieGrid;
