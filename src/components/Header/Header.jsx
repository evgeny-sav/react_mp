import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieDetails from '../MovieDetails/MovieDetails';
import styles from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: 'details',
      show: 'search',
    };
  }
  render() {
    const { show } = this.state;
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.title}>netflixroulette</div>

          {show === 'details' ? (
            <div className={styles.movieDetails}>
              <MovieDetails />
            </div>
          ) : (
            <div className={styles.search}>
              <SearchBar />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
