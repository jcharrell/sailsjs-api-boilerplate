# sailsjs-api-boilerplate
A boilerplate for the Sails.JS API framework.  This particular boiler plate provides a `/users` endpoint which supports:

+ Creating/updating users
+ Login authentication
+ Password resets via e-mail

Additionally it supports JSON web tokens for ACL policy validation and stateless transactions, as well as hassle free sending of HTML e-mails.

## Requirements
- [Node.js](http://nodejs.org/)

## Up and Running

1. `git clone git@github.com:jcharrell/sailsjs-api-boilerplate.git`
2. `cd sailsjs-api-boilerplate`
3. `npm install` (may need `sudo`).
4. `npm run dev`
5. Accessible at at `http://localhost:3000`

### Errors to handle
#### 1. Unable to check your npm-version:
```
Sails.js Installation - Error
--------------------------------------------------------
Unable to check your npm-version
```
Running this line in your terminal should do the trick:
`curl -L https://npmjs.org/install.sh | sudo sh`

Then try `npm install` again and sails should install with no errors.

#### 2. -bash: sails: command not found
```
$ npm run dev
-bash: sails: command not found
```
You may need to install sails.js globally. If so run this:
`sudo npm install sails -g`

## Configuring
Some configurations will need to be made in order to tailor the API for your own needs.

#### Project Settings `/config/project.js`
Project settings include the project title, JSON web token secret, consuming website URL, and the returning URI for password reset e-mails.

#### Connection Settings `/config/connections.js`
Database connection settings are defined within `connections.js`.  There are ample examples of defining database connections within the configuration file itself.  

Connection details, such as `username` and `password`, can and are overridden in environment specific configuration files which are located in `/config/env/*.js`.

#### Model Settings `/config/models.js`
The model settings define the connection to be used for the project, as well as the data migration method.  See `Connection Settings` for more information on defining connections.

#### Policy Settings `/config/policies.js`
Policy settings define ACL policies for each controller within the API.  Policies have been defined and configured for the existing `UserController` controller.  In order to create or modify existing policies, see `/api/policies`.

#### Email Settings `/config/email.js`
This consists of the `nodemailer` transporter settings.  By default, the boilerplate API utilizes a SMTP pool to deliver e-mails.

## Extra
####Postman Collection
Included is a [Postman](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en) collection, with example requests to the `/users` API endpoint, which is located at `/sails-boilerplate-api.json.postman_collection`.

To import a collection into Postman, ensure that the `Collections` tab, in the top left, is selected.  To the right of that tab, choose the `Import Collection` icon.  Simply drag the collection file to the import modal or browse to the collection directly.

####Sails Documentation
Documentation specific to the Sails.js framework may be found [here](http://sailsjs.org/documentation/concepts/).
