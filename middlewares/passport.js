const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { compareSync } = require("bcrypt");
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ userId: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: "Incorrect Username..." });
      }
      if (!compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect Password..." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, { id: user._id.toString(), password: user.password });
});

passport.deserializeUser(function (user, done) {
  if (!user) {
    return done(null, false, { message: "error occurred" });
  }
  if (!user.id || !user.password) {
    return done(null, false, { message: "error occurred" });
  }
  return done(null, user);
});

module.exports = passport;
