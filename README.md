# sailsJS-boilerplate
A boiler plate for Sails.JS API framework

## Requirements
- [Node.js](http://nodejs.org/)

## Up and Running

1. `git clone git@github.com:sq1agency/sailsJS-boilerplate.git`
2. `cd sailsJS-boilerplate`
3. `npm install`
4. `NODE_ENV=local sails lift`
5. Accessible at at `http://localhost:3000`

## Configuring
Some configurations will need to be made in order to tailor the API for your own needs.

### Project Settings `/config/project.js`
Project settings include the project title, JSON web token secret, consuming website URL, and the returning URI for password reset e-mails.

### Connection Settings `/config/connections.js`
Database connection settings are defined within `connections.js`.  There are ample examples of defining database connections within the configuration file itself.  

Connection details, such as `username` and `password`, can and are overridden in environment specific configuration files which are located in `/config/env/*.js`.

### Model Settings `/config/models.js`
The model settings, defines the connection to be used for the project and database model migration methods.  See `Connection Settings` for more information on defining connections.

### Policy Settings `/config/policies.js`
Policy settings define ACL policies for each controller within the API.  Policies have been defined and configured for the existing `UserController`.  In order to create or modify existing policies, see `/api/policies`.

### Email Settings `/config/email.js`
This consists of the `nodemailer` transporter settings.  By default, the boilerplate API utilizes a SMTP pool.