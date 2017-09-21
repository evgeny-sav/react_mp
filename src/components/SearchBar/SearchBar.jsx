import React, { Component } from 'react';
import SearchBy from '../SearchBy/SearchBy';
import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
    };
  }

  handelSearch(val = 'title') {
    this.setState({ searchBy: val });
  }

  render() {
    return (
      <div className={styles.searchForm}>
        <form>
          <div className={styles.formTitle}>Find your movie</div>
          <input type="email" id={styles.searchBar} placeholder="Search" />
          <SearchBy onHandleSearch={val => this.handelSearch(val)} activeFilter={this.state.searchBy} />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
