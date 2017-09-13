import React, { Component } from 'react';
import './header.scss';
import SearchBar from "../SearchBar/SearchBar";
import styles from './header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <div className={styles.container}>
          <SearchBar/>
        </div>
      </header>
    );
  };
}

export default Header;
