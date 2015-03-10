/**
* User.js
*
* @description :: This is a basic user model which enables supports user registration and password resets.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  autoPk: true,

  attributes: {
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      required: true,
      type: 'string'
    },

    /*
     * By enabling the `is_admin` flag, the `isAdmin` and `orIsAdmin`
     * policies become possible to use.

    is_admin: {
      type: 'boolean',
      defaultsTo: false
    }

     */

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  // Lifecycle Callbacks
  beforeCreate: function (properties, next) {

    this.encryptPassword(properties.password, function(err, encryptedPassword) {
      if (err) return next(err);
      properties.password = encryptedPassword;
      next()
    });
  },

  encryptPassword: function(password, next) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(password, salt, function(err, hash) {
        if (err) return next(err);

        next(null, hash)
      });
    });
  },

  isValidPassword: function(password, user, next) {
    bcrypt.compare(password, user.password, function(err, match) {
      if (err) {
        next(err);
      }

      if (match) {
        next(null, true);
      } else {
        next(err);
      }
    });
  }

};

