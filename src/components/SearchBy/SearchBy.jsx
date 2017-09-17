import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './searchby.scss';
const cx = classNames.bind(styles);

class SearchBy extends Component {
  render() {
    return (
      <div className={styles.searchBy}>
        <p className={styles.title}>Search by</p>
        <ul className={styles.list}>
          <li className={cx(styles.item, styles.active)}>
            <a href="#">Director</a>
          </li>
          <li className={styles.item}>
            <a href="#">Title</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBy;
