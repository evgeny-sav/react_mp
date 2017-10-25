import Axios from 'axios';

export default class API {
  static async getMovie(id, appendToResponse = 'genres') {
    let movie = null;
    try {
      movie = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2dbb191a226476d26c943d4227f6bee1&language=en-US&append_to_response=${appendToResponse}`);
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
    return movie.data;
  }

  static async getMovies(searchBy, searchFor) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2dbb191a226476d26c943d4227f6bee1&query=${encodeURI(searchFor)}`;
    console.log(`[themoviedb]: ${url}`, searchBy);
    let movies = null;
    try {
      movies = await Axios.get(url);
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
    return movies.data;
  }
}
