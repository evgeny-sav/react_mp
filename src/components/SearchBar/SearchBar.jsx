import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  handleSearchBy(val = 'title') {
    this.setState({ searchBy: val });
  }

  handleInputChange(e) {
    this.setState({ searchFor: e.target.value });
  }

  render() {
    const { searchFor, searchBy } = this.state;
    return (
      <div className={styles.searchForm}>
        <div>
          <div className={styles.formTitle}>Find your movie</div>
          <input type="text" id={styles.searchBar} placeholder="Search" value={searchFor} onChange={e => this.handleInputChange(e)} />
          <SearchBy onHandleSearchBy={val => this.handleSearchBy(val)} activeFilter={searchBy} />
          <Link to={`/search?searchFor=${searchFor}&searchBy=${searchBy}`} className={styles.submitBtn}>Search</Link>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default SearchBar;
