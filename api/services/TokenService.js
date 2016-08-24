// TokenService.js - in api/services
var jwt = require('jsonwebtoken');

module.exports = {

  decode: function(token) {
    return jwt.decode(token, sails.config.project.secret);
  },

  sign: function(data, ttl) {
    return jwt.sign(data, sails.config.project.secret, { expiresIn: ttl });
  },

  verify: function(token, cb) {
    jwt.verify(token, sails.config.project.secret, function(err, data) {
      cb(err, data);
    });
  }
};