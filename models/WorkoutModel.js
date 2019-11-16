const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  description: {
    type: String,
    minlength: 4,
    maxlength: 255,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ["Swim", "Bike", "Run"],
    required: true
  },
  distance: {
    type: Number,
    min: 1,
    max: 100000,
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

mongoose.model("Workout", workoutSchema);

function validateWorkout(workout) {
  const schema = Joi.object({
    description: Joi.string()
      .min(1)
      .max(255)
      .required(),
    date: Joi.date().required(),
    type: Joi.string()
      .pattern(/(Swim|Bike|Run)/)
      .required(),
    distance: Joi.number()
      .min(1)
      .max(100000)
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

// exports.Workout = Workout;
exports.validate = validateWorkout;
