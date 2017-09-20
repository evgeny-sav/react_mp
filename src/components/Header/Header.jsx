import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieDetails from '../MovieDetails/MovieDetails';
import styles from './header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // show: 'details',
      show: 'search',
    };
  }
  render() {
    return (
      <header>
        <div className={styles.container}>
          <div className={styles.title}>netflixroulette</div>

          {this.state.show === 'details' ? (
            <div className={styles.movieDetails}>
              <MovieDetails />
            </div>
          ) : (
            <div className={styles.search}>
              <SearchBar />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
