import React, {Component} from 'react';
import styles from './movie-details.scss';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <div className={styles.movieAvatar}>
          <img src="http://www.gstatic.com/tv/thumb/movieposters/15684/p15684_p_v8_ac.jpg"
               alt="Pulp Fiction movie poster"/>
        </div>
        <div className={styles.movieDescription}>
          <h2>Pulp Fiction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem error fugiat minima molestias qui quisquam recusandae reprehenderit totam voluptas. Alias debitis eligendi facilis iure laboriosam laborum reiciendis sit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem error fugiat minima molestias qui quisquam recusandae reprehenderit totam voluptas. Alias debitis eligendi facilis iure laboriosam laborum reiciendis sit veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem error fugiat minima molestias qui quisquam recusandae reprehenderit totam voluptas. Alias debitis eligendi facilis iure laboriosam laborum reiciendis sit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem error fugiat minima molestias qui quisquam recusandae reprehenderit totam voluptas. Alias debitis eligendi facilis iure laboriosam laborum reiciendis sit veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem error fugiat minima molestias qui quisquam recusandae reprehenderit totam voluptas. Alias debitis eligendi facilis iure laboriosam laborum reiciendis sit veritatis?</p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
