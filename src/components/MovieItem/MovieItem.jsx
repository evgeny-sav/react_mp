import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './movie-item.scss';
const cx = classNames.bind(styles);

class MovieItem extends Component {
  render() {
    return (
      <div className={styles.movieItem}>
        <img src={this.props.imageUrl} alt="" />
      </div>
    );
  }
}

export default MovieItem;
