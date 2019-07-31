import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

function MovieCard({ title, posterUrl, overview }) {
  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} alt={'Poster to ' + { title }} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descr}>{overview}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
