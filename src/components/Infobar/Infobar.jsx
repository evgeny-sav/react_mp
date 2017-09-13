import React, {Component} from 'react';
import styles from './infobar.scss';

class Infobar extends Component {
  render() {
    return (
      <div className={styles.infobar}>
        <div className={styles.container}>
          <span>7 movies found</span>
          <span>Sort by:</span>
          <ul className={styles.listInline}>
            <li><a href="#" className="text-danger">release date</a></li>
            <li><a href="#" className="text-muted">rating</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Infobar;
