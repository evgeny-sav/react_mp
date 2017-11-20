const express = require('express');
const path = require('path');
const cors = require('cors');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/components/App/App').default;
const movieReducers = require('./src/reducers/movies').default;
const singleMovieReducer = require('./src/reducers/singleMovie').default;
const sortReducer = require('./src/reducers/sort').default;
const { createStore, combineReducers } = require('redux');
const { Provider } = require('react-redux');
const { StaticRouter } = require('react-router-dom');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/dist`));
app.use(cors());
app.use((req, res) => {
  const reducers = combineReducers({
    movie: singleMovieReducer,
    movies: movieReducers,
    sortBy: sortReducer,
  });

  const store = createStore(reducers);
  const html = ReactDOMServer.renderToString(<Provider store={store}><StaticRouter context={{}}><App /></StaticRouter></Provider>);
  const preloadedState = store.getState();
  res.render('index', { html, preloadedState });
});

process.on('uncaughtException', (err) => {
  console.log(err);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});
