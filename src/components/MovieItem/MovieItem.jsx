import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './movie-item.scss';

class MovieItem extends Component {
  render() {
    return (
      <div className={styles.movieItem}>
        <img src={this.props.imageUrl} alt="" />
      </div>
    );
  }
}

MovieItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default MovieItem;
