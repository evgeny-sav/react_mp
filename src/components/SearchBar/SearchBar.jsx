import React, {Component} from 'react';
import './search-bar.scss';

class SearchBar extends Component {
  render() {
    return (
      <form className="col-md-12">
        <h1>FIND YOUR MOVIE</h1>
        <input type="email" className="form-control" id="search-movie" placeholder="Search" />
        <p className="text-uppercase">Search by: <a href="#" className="btn btn-sm btn-danger">Director</a> <a href="#" className="btn btn-sm btn-outline-danger">Title</a></p>
        <button type="submit" className="btn btn-block btn-danger text-uppercase">Search</button>
      </form>
    );
  }
}

export default SearchBar;
