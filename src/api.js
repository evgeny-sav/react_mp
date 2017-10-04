import Axios from 'axios';

export default class API {
  static getMovies() {
    return Axios.get('http://localhost:3000/api/v1/movies');
  }

  static getData(searchBy, searchFor) {
    const url = `http://netflixroulette.net/api/api.php?${searchBy}=${searchFor}`;
    console.log(`[netflixroulette]: ${url}`);
    return Axios.get('http://localhost:3000/api/v1/movies');
  }
}
