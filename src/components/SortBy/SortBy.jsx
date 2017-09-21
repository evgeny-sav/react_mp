import React, { Component } from 'react';
import styles from './sortby.scss';

class SortBy extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'rate',
    };
  }

  handelSort(e, val) {
    e.preventDefault();
    switch (val) {
      case 'rate': this.setState({ sortBy: val });
        break;
      case 'release': this.setState({ sortBy: val });
        break;
      default: this.setState({ sortBy: 'rate' });
    }
  }

  render() {
    return (
      <div className={styles.filters}>
        <p className={styles.title}>Sort by: </p>
        <ul className={styles.filtersList}>
          <li className={this.state.sortBy === 'release' ? styles.active : null}>
            <a href="" onClick={e => this.handelSort(e, 'release')}>
              release date
            </a>
          </li>
          <li className={this.state.sortBy === 'rate' ? styles.active : null}>
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
