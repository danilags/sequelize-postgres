const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Log request to the console
app.use(logger('dev'));

// parse incoming
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to the club!',
    status: 200,
    sale: [{
      
    }]
  })
});

module.exports = app;
