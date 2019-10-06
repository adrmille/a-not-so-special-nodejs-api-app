/**
 * Passport configuration
 * Thanks to https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
 *  and https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4
 */

const _ = require("lodash");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const config = require('./config.js');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = global.gConfig.jwt_secret_key;

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  // TODO database call to check is the token is valid
  if (jwt_payload.id) {
    next(null, jwt_payload.id);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

module.exports = passport;