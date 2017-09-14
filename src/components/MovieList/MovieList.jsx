import React, {Component} from 'react';
import Axios from 'axios';
import MovieItem from '../MovieItem/MovieItem';
import styles from './movie-list.scss';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    MovieList.getMovies().then(movies => {
      this.setState({
        movies: movies.data.map(movie => {
          return <MovieItem key={movie.id} title={movie.title} description={movie.description} />;
        })
      })
    });
  }

  static getMovies() {
    return Axios.get('http://localhost:3000/api/v1/movies');
  }

  render() {
    return (
      <div className={styles.container}>
        { this.state.movies.length > 0 ?  this.state.movies : (<h1>No movies found</h1>)}
      </div>
    );
  }
}

export default MovieList;
