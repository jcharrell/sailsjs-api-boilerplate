/**
 * isAdmin
 *
 * @warning        THIS POLICY SHOULD BE PRECEDED BY THE `isAuthenticated` POLICY AS IT IS RESPONSIBLE FOR VERIFYING
 *                 THAT THE TOKEN HAS NOT EXPIRED.  THIS POLICY SIMPLY DECODES THE TOKEN TO ACQUIRE THE USER DATA
 *
 * @module      :: Policy
 * @description :: Simple policy to allow access to admins
 *                 Assumes that the user has an `is_admin` property
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {
  user = UserService.getUser(req);

  if(user.is_admin) {
    return next()
  } else {
    return res.forbidden('You are not permitted to perform this action.');
  }
};

