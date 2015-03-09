/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  /*
  user = {
    first_name: "Edward",
    last_name: "Teach",
    email: "blackbeard@aol.com",
    "password": "Dead men tell no tales..."
  }

  User.create(user).exec(function(err) {
    if(err) {
      sails.log(err);
      cb(err);
    } else {
      cb()
    }
  });
  */

  cb();
};
