// TokenService.js - in api/services
var jwt = require('jsonwebtoken');

module.exports = {

  decode: function(token) {
    return jwt.decode(token, sails.config.session.secret);
  },

  sign: function(data, ttl) {
    return jwt.sign(data, sails.config.session.secret, { expiresInMinutes: ttl });
  },

  verify: function(token, cb) {
    jwt.verify(token, sails.config.session.secret, function(err, data) {
      cb(err, data);
    });
  }
};