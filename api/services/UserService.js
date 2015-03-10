// UserService.js - in api/services

module.exports = {

  /***************************************************************************
   * Do not utilize this method unless you are positive that the web token   *
   * has not expired.  To ensure that the web token is valid, add the        *
   * `isAuthorized` policy to any controllers which will utilize this.
   ***************************************************************************/
  getUser: function (req) {
      if(req.headers.hasOwnProperty('authorization')) {
          return TokenService.decode(req.headers.authorization, sails.config.session.secret);
      } else {
          return false;
      }
  }

}