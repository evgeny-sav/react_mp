import React, {Component} from 'react';
import './search-bar.css';

class SearchBar extends Component {
  render() {
    return (
      <form className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <h1>FIND YOUR MOVIE</h1>
              <input type="email" className="form-control" id="search-movie" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <p className="text-uppercase">Search by: <a href="#" className="btn btn-sm btn-danger">Director</a> <a href="#" className="btn btn-sm btn-outline-danger">Title</a></p>
          </div>
          <div className="col-3 ml-auto">
            <button type="submit" className="btn btn-block btn-danger text-uppercase">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
