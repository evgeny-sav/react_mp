import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SortBy.scss';

const cx = classNames.bind(styles);

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'rate',
    };
  }

  handelSort(e, val = 'rate') {
    e.preventDefault();
    this.setState({ sortBy: val });
  }

  render() {
    const { sortBy } = this.state;
    return (
      <div className={styles.filters}>
        <p className={styles.title}>Sort by: </p>
        <ul className={styles.filtersList}>
          <li className={cx({ active: sortBy === 'release' })}>
            <a href="" onClick={e => this.handelSort(e, 'release')}>
              release date
            </a>
          </li>
          <li className={cx({ active: sortBy === 'rate' })}>
            <a href="" onClick={e => this.handelSort(e, 'rate')}>
              rating
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SortBy;
