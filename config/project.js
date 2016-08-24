/**
 * Project Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.globals.html
 */
module.exports.project = {

  /***************************************************************************
   * Set the project name.  This can be utilized within email templates      *
   ***************************************************************************/
  name: 'Boilerplate Project',

  /***************************************************************************
   *                                                                          *
   * Session secret is utilized when creating JSON Web Tokens                 *
   *                                                                          *
   ***************************************************************************/
  secret: 'ewfn09qu43f09qfj94qf*&H#(R',

  /***************************************************************************
   * Set the url of the consuming website.  This will be used for e-mails    *
   * and generated links. Ensure that the correct URL is defined for each    *
   * environment configuration, if it should differ.
   ***************************************************************************/
  webUrl: 'http://boilerplate.yourdomain.com',

  passwordReset: {
    /***************************************************************************
     * The frontend URI for the password reset form                            *
     * A JSON Web Token will be appended to the end of this URI and linked     *
     * within the password reset e-mail.                                       *
     *                                                                         *
     * Email template: /assets/templates/email/forgotPassword                  *
     ***************************************************************************/
    uri: '/#/login/reset-password/',
    template: 'forgotPassword',
    subject: 'Password reset request received',
    from: 'dev@yourdomain.com',
    tokenTTL: 7200000 // In milliseconds
  }

};
