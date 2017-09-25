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

  handelSearchBy(val = 'title') {
    this.setState({ searchBy: val });
  }

  handleInputChange() {
    this.setState({ searchFor: 'Batman' }); // e.target.value
  }

  render() {
    return (
      <div className={styles.searchForm}>
        <div>
          <div className={styles.formTitle}>Find your movie</div>
          <input type="text" id={styles.searchBar} placeholder="Search" value={this.state.searchFor} onChange={() => this.handleInputChange} />
          <SearchBy onHandleSearchBy={val => this.handelSearchBy(val)} activeFilter={this.state.searchBy} />
          <Link to={`/search/?searchFor=${this.state.searchFor}&searchBy=${this.state.searchBy}`} className={styles.submitBtn}>Search</Link>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default SearchBar;
