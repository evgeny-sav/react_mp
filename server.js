const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.static(`${__dirname}/dist`));
app.use(cors());

process.on('uncaughtException', (err) => {
  console.log(err);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server is running on port 3000');
});
