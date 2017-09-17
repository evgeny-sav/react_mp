import React, {Component} from 'react';
import styles from './sortby.scss';

class SortBy extends Component {
  render() {
    return (
      <div className={styles.filters}>
        <p className={styles.title}>Sort by: </p>
        <ul className={styles.filtersList}>
          <li><a href="#" className="text-danger">release date</a></li>
          <li className={styles.active}><a href="#" className="text-muted">rating</a></li>
        </ul>
      </div>

    );
  }
}

export default SortBy;
