const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser && existingUser.name === profile.displayName) {
          return done(null, existingUser);
        } else if (existingUser && existingUser.name !== profile.displayName) {
          const user = await new User({
            googleId: profile.id,
            name: profile.displayName
          }).save();

          done(null, user);
        }
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName
        }).save();

        done(null, user);
      } catch (err) {
        console.log("ERROR", err);
      }
    }
  )
);