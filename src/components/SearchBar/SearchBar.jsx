import React, {Component} from 'react';
import classNames from 'classnames';
import SearchBy from '../SearchBy/SearchBy';
import styles from './search-bar.scss';

const cx = classNames.bind(styles);

class SearchBar extends Component {
  render() {
    return (
      <div className={styles.searchForm}>
        <form>
          <p className={styles.formTitle}>FIND YOUR MOVIE</p>
          <input type="email" id={styles.searchBar} placeholder="Search" />
          <SearchBy />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
