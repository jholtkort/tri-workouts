const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

const keys = require("./config/keys");
require("./models/User");
const workoutRoutes = require("./routes/workoutRoutes");
const authRoutes = require("./routes/authRoutes");
// const cors = require("cors");

require("./services/passport");

mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("ERROR could not connect to MongoDB", err));

const app = express();

app.use(express.json());

// app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/workouts", (req, res) => res.send(`Thanks, ${req.user}`));
app.use("/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);

// React file in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
