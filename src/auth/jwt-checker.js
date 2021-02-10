'use strict';

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-4zbaxg9b.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://hall-of-fame-uf-dev.herokuapp.com/',
issuer: 'https://dev-4zbaxg9b.us.auth0.com/',
algorithms: ['RS256']
});

module.exports = jwtCheck