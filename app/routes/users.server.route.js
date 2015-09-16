"use strict";

var express = require("express"),
  ctrl = require("../controllers/users.server.controller"),
  router = express.Router();

module.exports = function(app) {
  //local
  router.route('/users')
    .get(ctrl.findAll);

  app.use('/', router);

  return router;
};
