import express from 'express';
import cors from 'cors';
import path from 'path';
import ejs from 'ejs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './components/App/App';
import movieReducers from './reducers/movies';
import singleMovieReducer from './reducers/singleMovie';
import sortReducer from './reducers/sort';

require('dotenv').config();

const app = express();

app.engine('ejs', ejs.__express); // eslint-disable-line
app.set('view engine', 'ejs');
app.set('views', path.join('dist'));
app.use(cors());

app.use('/static', express.static('dist'));
app.get('*', (req, res) => {
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
