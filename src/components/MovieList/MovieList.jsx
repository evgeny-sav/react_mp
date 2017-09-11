import React, {Component} from 'react';
import Axios from 'axios';
import MovieItem from '../MovieItem/MovieItem';
import './movie-list.scss';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };

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
      <div className="container">
        <div className="row">
          { this.state.movies.length > 0 ?  this.state.movies : (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="text-center text-muted">No movies found</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
