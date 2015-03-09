/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions (`true` allows public     *
   * access)                                                                  *
   *                                                                          *
   ***************************************************************************/

  // '*': true,

  /***************************************************************************
   *                                                                          *
   * Here's an example of mapping some policies to run before a controller    *
   * and its actions                                                          *
   *                                                                          *
   ***************************************************************************/
  UserController: {


    /***************************************************************************
     *                                                                          *
     * Apply the `false` policy as the default for all the UserController's     *
     * actions (`false` prevents all access, which ensures that nothing bad     *
     * happens to our users)                                                    *
     ***************************************************************************/
    '*': false,


    /***************************************************************************
     *                                                                          *
     * Limit logging in and creating new user records to unauthenticated users  *
     * This is not necessary, but it used to demonstrate the isUnathenticated   *
     * policy.
     *                                                                          *
     ***************************************************************************/
    login: ['isUnauthenticated'],
    create: ['isUnauthenticated'],


    /***************************************************************************
     *                                                                          *
     * Do not allow anyone to list all users.  If the user model has an         *
     * `is_admin` property, you may apply the isAdmin policy here to limit      *
     * access.                                                                  *
     *                                                                          *
     ***************************************************************************/
    //find: ['isAuthenticated'],


    /***************************************************************************
     *                                                                          *
     * Only allow user record owners to view, update or delete their records    *
     *                                                                          *
     ***************************************************************************/
    delete: ['isAuthenticated', 'isUserOwner'],
    findOne: ['isAuthenticated', 'isUserOwner'],
    update: ['isAuthenticated', 'isUserOwner'],


    /***************************************************************************
     *                                                                          *
     * Only allow user record owners to view, update or delete their records    *
     *                                                                          *
     ***************************************************************************/
    requestPasswordReset: true,
    validatePasswordReset: true
  }

};
