import React, {Component} from 'react';
import './movie-item.scss';

class MovieItem extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="movie-item">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default MovieItem;
