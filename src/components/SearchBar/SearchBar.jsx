import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBy from '../SearchBy/SearchBy';
import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'title',
      searchFor: 'Batman',
    };
  }

  handleSearchBy = (val = 'title') => {
    this.setState({ searchBy: val });
  };

  handleInputChange = (e) => {
    this.setState({ searchFor: e.target.value });
  };

  render() {
    const { searchFor, searchBy } = this.state;
    return (
      <div className={styles.searchForm}>
        <div className="noop">
          <div className={styles.formTitle}>Find your movie</div>
          <input type="text" id={styles.searchBar} placeholder="Search" value={searchFor} onChange={this.handleInputChange} />
          <SearchBy onHandleSearchBy={this.handleSearchBy} activeFilter={searchBy} />
          <Link to={`/search?searchFor=${searchFor}&searchBy=${searchBy}`} className={styles.submitBtn}>Search</Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
