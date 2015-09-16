"use strict";

require('../models/users.server.model.js');
var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.findAll = function(req, res) {
  Users.find({}, function(err, users) {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(users);
  });
};
