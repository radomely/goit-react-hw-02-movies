import React, { Fragment, Component } from 'react';
import MovieGrid from './components/MovieGrid/MovieGrid';
import movies from './movies.json';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends Component() {
  state = {
    value: '',
  };
  handlerOnChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <Fragment>
        <SearchBar value={this.state.value} onChange={this.handlerOnChange} />
        <MovieGrid items={movies} />
      </Fragment>
    );
  }
}
