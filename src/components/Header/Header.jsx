import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchBy from '../SearchBy/SearchBy';
import MovieDetails from '../MovieDetails/MovieDetails';
import styles from './header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: 'details', // search
    };
  }
  render() {
    return (
      <header>
        <div className={styles.container}>
          {this.state.show === 'details' ? (
            <MovieDetails />
          ) : (
            <div>
              <SearchBar />
              <SearchBy />
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
