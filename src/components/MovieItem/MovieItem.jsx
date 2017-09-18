import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './movie-item.scss';

class MovieItem extends Component {
  render() {
    return (
      <div className={styles.movieItem}>
        <div className={styles.movieImage}>
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className={styles.movieInfo}>
          <p className={styles.title}>
            {this.props.title} <span className={styles.year}>2017</span>
          </p>
          <p className={styles.genre}>Fiction</p>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MovieItem;
