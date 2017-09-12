import React, {Component} from 'react';
import MovieList from '../MovieList/MovieList';
import './main.scss';

class Main extends Component {
  render() {
    return (
      <main>
        <MovieList />
      </main>
    );
  }
}

export default Main;