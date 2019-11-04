const { validate, Workout } = require("../models/workout");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const workouts = await Workout.find().sort("date");
  res.send(workouts);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let workout = new Workout({
    description: req.body.description
    // date: req.body.date,
    // type: req.body.type,
    // time: req.body.time,
    // distance: req.body.distance,
    // distanceUnits: req.body.distanceUnits,
    // hour: req.body.hour,
    // minute: req.body.minute,
    // second: req.body.second
  });

  workout = await workout.save();

  res.send(workout);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description
      // date: req.body.date,
      // type: req.body.type,
      // time: req.body.time,
      // distance: req.body.distance,
      // distanceUnits: req.body.distanceUnits,
      // hour: req.body.hour,
      // minute: req.body.minute,
      // second: req.body.second
    },
    { new: true }
  );

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found");

  res.send(workout);
});

router.delete("/:id", async (req, res) => {
  const workout = await Workout.findByIdAndRemove(req.params.id);

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found");

  res.send(workout);
});

router.get("/:id", async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout)
    return res.status(404).send("The workout with the given ID was not found");

  res.send(workout);
});

module.exports = router;
