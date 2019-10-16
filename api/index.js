const workouts = require("./routes/workouts");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/workouts", workouts);

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
