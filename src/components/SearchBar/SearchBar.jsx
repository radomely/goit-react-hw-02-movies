import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={onChange}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
