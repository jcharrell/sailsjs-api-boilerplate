/**
 * orPolicy
 *
 * @module      :: Policy
 * @description :: A policy to check if one or more policies are truthy
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

module.exports = function(req, res, next) {

  // If the policies array does not exist as a property on the request object or the array
  // contains no truthy values, the ACL policy chain fails
  if(!req.policies || !Array.isArray(req.policies) || req.policies.indexOf(true) === -1) {
    return res.forbidden('You are not permitted to perform this action.');
  } else {
    next()
  }

};

