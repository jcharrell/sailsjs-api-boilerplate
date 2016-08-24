/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt');

module.exports = {

  login: function (req, res) {
    User.findOneByEmail(req.body.email).exec(function (err, user) {
      if (err) res.serverError(err);

      if (user) {
        User.isValidPassword(req.body.password, user, function(err, match) {
          if (match) {
            // password match
            var token = TokenService.sign(user, req.body.ttl);

            res.ok({user: user, token: token});
          } else {
            res.unauthorized()
          }
        });

      } else {
        res.unauthorized();
      }
    });
  },

  requestPasswordReset: function (req, res) {
    User.findOneByEmail(req.body.email).exec(function (err, user) {
      if (err) res.serverError(err);

      if (user) {
        // Create a verification token, which will expire in 2 hours
        token = TokenService.sign({id: user.id}, sails.config.project.passwordReset.tokenTTL);

        var templateData = {
          to: user.email,
          from: sails.config.project.passwordReset.from,
          subject: sails.config.project.passwordReset.subject,
          userEmail: user.email,
          siteName: sails.config.project.name,
          url: sails.config.project.webUrl + sails.config.project.passwordReset.uri + token
        };

        EmailService.sendMail(sails.config.project.passwordReset.template, templateData, function(err, message) {
          if (err) return sails.log.error('> error sending password reset email', err);
          sails.log.verbose('> sending password reset email to:', user.email);
        });

        res.status(204).json({});
      } else {
        res.notFound({ error: 'User not found' });
      }

    });
  },

  validatePasswordReset: function (req, res) {
    // Verify that the reset token has not expired
    TokenService.verify(token, function(err, data) {
        if(err) {
            res.serverError(err);
        } else {

            User.findOne({id: data.id}).exec(function (err, user) {
                if (err){
                    res.serverError(err);
                } else {
                    if (user) {
                        User.encryptPassword(req.body.password, function(err, encryptedPassword) {
                            user.password = encryptedPassword;
                            user.save();
                            res.status(204).json({});
                        })
                    } else {
                        res.notFound({ error: 'User not found' });
                    }
                }
            });
        }
    });
  }
}

