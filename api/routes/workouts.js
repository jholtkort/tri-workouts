const Joi = require("@hapi/joi");
const express = require("express");
const router = express.Router();

const workouts = [
  {
    id: 1,
    description: "a",
    date: "2019",
    type: "a",
    time: "a",
    distance: "a",
    distanceUnits: "a",
    hour: "a",
    minute: "a",
    second: "a"
  },
  {
    id: 2,
    description: "a",
    date: "2019",
    type: "a",
    time: "a",
    distance: "a",
    distanceUnits: "a",
    hour: "a",
    minute: "a",
    second: "a"
  },
  {
    id: 3,
    description: "a",
    date: "2019",
    type: "a",
    time: "a",
    distance: "a",
    distanceUnits: "a",
    hour: "a",
    minute: "a",
    second: "a"
  }
];

router.get("/", (req, res) => {
  res.send(workouts);
});

router.post("/", (req, res) => {
  const { error } = validateWorkout(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const workout = {
    id: workouts.length + 1,
    description: req.body.description,
    date: req.body.date,
    type: req.body.type,
    time: req.body.time,
    distance: req.body.distance,
    distanceUnits: req.body.distanceUnits,
    hour: req.body.hour,
    minute: req.body.minute,
    second: req.body.second
  };

  workouts.push(workout);
  res.send(workout);
});

router.put("/:id", (req, res) => {
  const workout = workouts.find(c => c.id === parseInt(req.params.id));
  if (!workout)
    return res.status(404).send("The workout with the given ID was not found");

  const { error } = validateWorkout(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  workout.description = req.body.description;
  workout.date = req.body.date;
  workout.type = req.body.type;
  workout.time = req.body.time;
  workout.distance = req.body.distance;
  workout.distanceUnits = req.body.distanceUnits;
  workout.hour = req.body.hour;
  workout.minute = req.body.minute;
  workout.second = req.body.second;

  res.send(workout);
});

router.delete("/:id", (req, res) => {
  const workout = workouts.find(c => c.id === parseInt(req.params.id));
  if (!workout)
    return res.status(404).send("The workout with the given ID was not found");

  const index = workouts.indexOf(workout);
  workouts.splice(index, 1);

  res.send(workout);
});

router.get("/:id", (req, res) => {
  const workout = workouts.find(c => c.id === parseInt(req.params.id));
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
