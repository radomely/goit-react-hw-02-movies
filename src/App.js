import React, { Component } from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
import SearchBar from './components/SearchBar/SearchBar';
import Container from './components/Container/Container';
import movies from './movies.json';

const filterMovies = (moviess, filter) => {
  return moviess.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    filter: '',
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredMovies = filterMovies(movies, filter);
    return (
      <Container>
        <SearchBar value={filter} onChange={this.changeFilter} />
        <MovieGrid items={filteredMovies} />
      </Container>
    );
  }
}
