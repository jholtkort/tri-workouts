const mongoose = require("mongoose");
const workouts = require("./routes/workouts");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/triworkout", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/workouts", workouts);

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
