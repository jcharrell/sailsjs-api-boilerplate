/**
 * Email Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.globals.html
 */
module.exports.email = {

  /***************************************************************************
   * Your nodemailer transport module configuration. Consult the nodemailer  *
   * documentation for transport configuraion options.                       *
   *                                                                         *
   * nodemailer: https://github.com/andris9/Nodemailer                       *
   ***************************************************************************/

  templateDir: __dirname + '/../assets/templates/email',

  transports: {

    smtp: {
      "host": "localhost",
      "port": 25,
      "secure": false,
      "tls": {
        "rejectUnauthorized": false
      }
    },

    smtpPool: {
      "host": "localhost",
      "port": 25,
      "secure": false,
      "tls": {
        "rejectUnauthorized": false
      }
    }
  }
};
