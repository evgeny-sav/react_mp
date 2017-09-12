import React, { Component } from 'react';
import './header.scss';
import SearchBar from "../SearchBar/SearchBar";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <SearchBar/>
        </div>
      </header>
    );
  };
}

export default Header;
