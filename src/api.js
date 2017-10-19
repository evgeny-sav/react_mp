import Axios from 'axios';

export default class API {
  static getMovie(id, appendToResponse = 'genres') {
    return Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2dbb191a226476d26c943d4227f6bee1&language=en-US&append_to_response=${appendToResponse}`).then(res => res.data);
  }

  static getMovies(searchBy, searchFor) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2dbb191a226476d26c943d4227f6bee1&query=${encodeURI(searchFor)}`;
    console.log(`[themoviedb]: ${url}`, searchBy);
    return Axios.get(url).then(res => res.data);
  }
}
