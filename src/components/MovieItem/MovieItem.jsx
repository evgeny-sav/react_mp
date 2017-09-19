import React from 'react';
import PropTypes from 'prop-types';
import styles from './movie-item.scss';

const MovieItem = () => {
  this.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

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
};

export default MovieItem;
