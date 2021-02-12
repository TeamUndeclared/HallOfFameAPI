'use strict';

//3rd party dependencies
const express = require('express');
const  cors = require('cors');
const morgan = require('morgan');


//server constants
const notFoundHandler = require('./error-handling/404');
const errorHandler = require('./error-handling/500');
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

const jwtCheck = require('./auth/jwt-checker');

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  issuerBaseURL: 'https://dev-uhg26xll.us.auth0.com'
};


//app level middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);
app.get('/', homehandler);
app.get('/profile',jwtCheck, (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use('*', notFoundHandler);
app.use(errorHandler);



function homehandler(req, res) {

  res.status(200).send('Welcome to Hall of Fame Api a place to store and access archive projects for a full list of functions see the repo on git hub'
  );
}

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`listening on ${port}`));
  },
};
