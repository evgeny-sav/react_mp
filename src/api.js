import Axios from 'axios';

export default class API {
  static getMovies() {
    return Axios.get('http://localhost:3000/api/v1/movies');
  }

  static getData() {
    return Axios.get('http://localhost:3000/api/v1/movies');
  }
}
