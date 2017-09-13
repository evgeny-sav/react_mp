import React, {Component} from 'react';
import styles from './movie-item.scss';

class MovieItem extends Component {
  render() {
    return (
      <div className={styles.movieItem}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default MovieItem;
