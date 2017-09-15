import React, {Component} from 'react';
import styles from './search-bar.scss';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <h1>FIND YOUR MOVIE</h1>
        <input type="email" id="search-movie" placeholder="Search" />
        <p className="text-uppercase">
          Search by: <a href="#">Director</a> <a href="#">Title</a>
        </p>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
