/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated
 *                 Assumes that the request has a valid JWT token in `req.headers.Authorization`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {

  if(req.headers.authorization) {
    TokenService.verify(req.headers.authorization, function (err, user) {
      if (err || !user) {
        return res.forbidden('You are not permitted to perform this action.');
      } else {
        next()
      }
    });
  } else {
    return res.forbidden('You are not permitted to perform this action.');
  }
};

