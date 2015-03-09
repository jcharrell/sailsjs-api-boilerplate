// EmailService.js - in api/services
var path           = require('path')
  , emailTemplates = require('email-templates')
  , nodemailer     = require('nodemailer')
  , smtpPool       = require('nodemailer-smtp-pool')

/***************************************************************************
 * Any valid nodemailer transporter may be used.  We utilize an SMTP Pool  *
 * transporter to prevent establishing a SMTP connection for each e-mail   *
 * sent                                                                    *
 *                                                                         *
 * Note that the transporter configuration should be done within the email *
 * configuration file: /config/emails.js                                   *
 *                                                                         *
 * node-email-templates: https://github.com/niftylettuce/node-email-templates
 ***************************************************************************/
var transporter = nodemailer.createTransport(smtpPool(sails.config.email.transports.smtpPool));

module.exports = {

      sendMail: function (templateName, templateData, callback) {
        emailTemplates(sails.config.email.templateDir, function (err, template) {
          if (err) {
            callback(err);
          } else {
            template(templateName, templateData, function (err, html, text) {
              if (err) {
                callback(err);
              } else {
                transporter.sendMail({
                  from: templateData.from,
                  to: templateData.to,
                  subject: templateData.subject,
                  html: html,
                  text: text
                }, function (err, responseStatus) {
                  if (err) {
                    callback(err)
                  } else {
                    callback(null, responseStatus)
                  }
                });
              }
            });
          }
        });
      }
};