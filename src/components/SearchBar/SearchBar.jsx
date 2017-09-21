import React from 'react';
import SearchBy from '../SearchBy/SearchBy';
import styles from './SearchBar.scss';

const SearchBar = () => (
  <div className={styles.searchForm}>
    <form>
      <div className={styles.formTitle}>Find your movie</div>
      <input type="email" id={styles.searchBar} placeholder="Search" />
      <SearchBy />
      <button className={styles.submitBtn} type="submit">
        Search
      </button>
    </form>
  </div>
);

export default SearchBar;
