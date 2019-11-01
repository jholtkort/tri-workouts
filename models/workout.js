const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

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

exports.Workout = Workout;
exports.validate = validateWorkout;
