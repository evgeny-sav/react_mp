const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
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

app.engine('handlebars', exphbs({ defaultLayout: 'index', helpers: { json: ctx => JSON.stringify(ctx) } }));
app.set('view engine', 'handlebars');

// app.set('views', path.join(__dirname, 'views/layouts'));

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
  res.render('app', { html, preloadedState });
});

process.on('uncaughtException', (err) => {
  console.log(err);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});
