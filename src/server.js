'use strict';

//3rd party dependencies
const express = require('express');
const  cors = require('cors');
const morgan = require('morgan');

//server constants
const notFoundHandler = require('./error-handling/404');
const errorHandler = require('./error-handling/500');
const v1Routes = require('./routes/v1');


const app = express();


const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: 'http://localhost:3000',
  clientID: '76AnvZ4HTAarvu39iYT13UicNgk5NotC',
  issuerBaseURL: 'https://dev-uhg26xll.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//app level middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', v1Routes);
app.get('/', homehandler);


app.use('*', notFoundHandler);
app.use(errorHandler);

function homehandler(req, res) {
  res.status(200).send('it\'s AAAALLLLIIIIVVVVEEEEEE');
}

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`listening on ${port}`));
  },
};
