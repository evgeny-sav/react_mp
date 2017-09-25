import Axios from 'axios';

export default class API {
  static getMovies() {
    return Axios.get('http://localhost:3000/api/v1/movies');
  }

  static getData(searchFor, searchBy) {
    return Axios
      .get('http://localhost:3000/api/v1/movies')
      .then(movies => movies.data.filter(movie => movie[searchBy] === searchFor));
  }
}
