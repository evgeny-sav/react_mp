import React, {Component} from 'react';
import './infobar.scss';

class Infobar extends Component {
  render() {
    return (
      <div className="infobar">
        <div className="container">
          <span>7 movies found</span>
          <span className="d-inline">Sort by:</span>
          <ul className="list-inline">
            <li className="list-inline-item mr-3"><a href="#" className="text-danger">release date</a></li>
            <li className="list-inline-item mr-3"><a href="#" className="text-muted">rating</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Infobar;
