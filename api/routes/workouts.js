const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const workoutSchema = new mongoose.Schema({
  description: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ["swim", "bike", "run"],
    required: true
  },
  time: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    min: 1,
    max: 500,
    required: true
  },
  distanceUnits: {
    type: String,
    enum: ["mi", "yd", "km", "m"],
    required: true
  },
  hour: {
    type: Number,
    min: 0,
    max: 99,
    required: true
  },
  minute: {
    type: Number,
    min: 0,
    max: 59,
    required: true
  },
  second: {
    type: Number,
    min: 0,
    max: 59,
    required: true
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

router.get("/", async (req, res) => {
  const workouts = await Workout.find().sort("date");
  res.send(workouts);
});

router.post("/", async (req, res) => {
  const { error } = validateWorkout(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let workout = new Workout({
    description: req.body.description,
    date: req.body.date,
    type: req.body.type,
    time: req.body.time,
    distance: req.body.distance,
    distanceUnits: req.body.distanceUnits,
    hour: req.body.hour,
    minute: req.body.minute,
    second: req.body.second
  });

  workout = await workout.save();

  res.send(workout);
});

router.put("/:id", async (req, res) => {
  const { error } = validateWorkout(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const workout = await Workout.findByIdAndUpdate(
    req.params.id,
    {
      description: req.body.description,
      date: req.body.date,
      type: req.body.type,
      time: req.body.time,
      distance: req.body.distance,
      distanceUnits: req.body.distanceUnits,
      hour: req.body.hour,
      minute: req.body.minute,
      second: req.body.second
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

function validateWorkout(workout) {
  const schema = Joi.object({
    description: Joi.string()
      .min(5)
      .max(255)
      .required(),
    date: Joi.date().required(),
    type: Joi.string()
      .pattern(/(swim|bike|run)/)
      .required(),
    time: Joi.string()
      .pattern(/\b((1[0-2]|0?[1-9]):([0-5][0-9])([AaPp][Mm]))/)
      .required(),
    distance: Joi.number()
      .min(1)
      .max(500)
      .required(),
    distanceUnits: Joi.string()
      .pattern(/(mi|yd|km|m)/)
      .required(),
    hour: Joi.number()
      .min(0)
      .max(99)
      .required(),
    minute: Joi.number()
      .min(0)
      .max(59)
      .required(),
    second: Joi.number()
      .min(0)
      .max(59)
      .required()
  });

  return schema.validate(workout);
}

module.exports = router;
