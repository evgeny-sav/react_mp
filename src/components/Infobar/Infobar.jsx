import React, {Component} from 'react';
import SortBy from '../SortBy/SortBy';
import styles from './infobar.scss';

class Infobar extends Component {
  render() {
    return (
      <div className={styles.infobar}>
        <div className={styles.container}>
          <span>7 movies found</span>
          <SortBy/>
        </div>
      </div>
    );
  }
}

export default Infobar;
