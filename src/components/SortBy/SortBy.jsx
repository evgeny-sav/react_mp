import React, { Component } from 'react';
import styles from './sortby.scss';

class SortBy extends Component {
  render() {
    return (
      <ul className={styles.listInline}>
        <li>SORT BY: </li>
        <li><a href="#" className="text-danger">release date</a></li>
        <li><a href="#" className="text-muted">rating</a></li>
      </ul>
    );
  }
}

export default SortBy;
