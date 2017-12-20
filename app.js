const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const index = require('./server/routes/index');

const app = express();

// Log request to the console
app.use(logger('dev'));

// parse incoming
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the club!',
  status: 200
}));

module.exports = app;
