import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieGrid = ({ items }) => (
  <ul className={styles.movieGrid}>
    {items.map(item => (
      <li key={item.id}>
        <MovieCard
          title={item.title}
          posterUrl={item.posterUr}
          overviev={item.overview}
        />
      </li>
    ))}
  </ul>
);
MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default MovieGrid;
