import React, {Component} from 'react';
import './infobar.css';

class Infobar extends Component {
  render() {
    return (
      <div className="infobar mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p>7 movies found</p>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-3">
                  <p className="d-inline">Sort by:</p>
                </div>
                <div className="col-md-9">
                  <ul className="list-inline text-left">
                    <li className="list-inline-item mr-3"><a href="#" className="text-danger">release date</a></li>
                    <li className="list-inline-item mr-3"><a href="#" className="text-muted">rating</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Infobar;
