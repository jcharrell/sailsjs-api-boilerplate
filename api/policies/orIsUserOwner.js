/**
 * isUserOwner
 *
 * @warning        THIS POLICY SHOULD BE PRECEDED BY THE `isAuthenticated` POLICY AS IT IS RESPONSIBLE FOR VERIFYING
 *                 THAT THE TOKEN HAS NOT EXPIRED.  THIS POLICY SIMPLY DECODES THE TOKEN TO ACQUIRE THE USER DATA
 *
 * @module      :: Policy
 * @description :: Simple policy to allow access only to the owning user or admin
 *                 Assumes that the requesting user is who he/she says they are
 *
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {

  user = UserService.getUser(req);

  if(!req.hasOwnProperty('policies') || !Array.isArray(req.policies)) {
    req.policies = [];
  }

  if(req.method === 'PUT' || req.method === 'GET' || req.method === 'DELETE') {
    if(!req.params.id) return res.forbidden('You are not permitted to perform this action.');
    requestedUserId = req.params.id
  }

  // If the requesting user matches the token's user id or the requesting user is an admin, allow access
  if(user.id == req.params.id) {
    req.policies.push(true)

  } else {
    req.policies.push(false);
  }
  return next();
};

