const mongoose = require("mongoose");
const workouts = require("./routes/workouts");
const cors = require("cors");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/triworkout", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("ERROR could not connect to MongoDB"));

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(express.json());
app.use("/api/workouts", workouts);

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
