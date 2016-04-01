/**
 * Staging environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the local database connection authentication details                *
   * environment (see config/connections.js )                                *
   ***************************************************************************/
  connections: {
    postgresqlServer: {
      user: 'captain',
      password: 'leeward'
    }
  },

  /***************************************************************************
   * Set the port based on the PORT environment value                        *
   ***************************************************************************/

  port: process.env.PORT || 3000,

  /***************************************************************************
   * Set the url of the consuming website.  This will be used for e-mails    *
   * and generated links                                                     *
   ***************************************************************************/
  project: {
    webUrl: 'http://stage.api.boilerplate.yourdomain.com'
  }


};
