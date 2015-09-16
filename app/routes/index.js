'use strict';

var userRoute = require('./users.server.route');

module.exports = function(app) {
  userRoute(app);
};
