/**
 * Passport configuration
 * Thanks to https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
 */
const passport = require("passport");
const passportJWT = require("passport-jwt");
const config = require('../config/config.js');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = global.gConfig.jwt_secret_key;

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  // TODO database call to check is the token is valid
  if (jwt_payload.id) {
    next(null, jwt_payload.id);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

module.exports = passport;