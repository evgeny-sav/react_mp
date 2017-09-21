import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './searchby.scss';

const cx = classNames.bind(styles);

class SearchBy extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
    };
  }

  handelSearch(e, val) {
    e.preventDefault();
    switch (val) {
      case 'title': this.setState({ searchBy: val });
        break;
      case 'director': this.setState({ searchBy: val });
        break;
      default: this.setState({ searchBy: 'title' });
    }
  }

  render() {
    return (
      <div className={styles.searchBy}>
        <p className={styles.title}>Search by</p>
        <ul className={styles.list}>
          <li className={cx(styles.item, this.state.searchBy === 'director' ? styles.active : null)}>
            <a href="" onClick={e => this.handelSearch(e, 'director')}>Director</a>
          </li>
          <li className={cx(styles.item, this.state.searchBy === 'title' ? styles.active : null)}>
            <a href="" onClick={e => this.handelSearch(e, 'title')}>Title</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBy;
