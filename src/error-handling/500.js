'use strict';

module.exports = (err, req, res, next) => {
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(err));
  res.end();
};
