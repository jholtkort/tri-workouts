import React from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Col, Row, Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  renderTextField,
  renderSelectField,
  renderDateField,
  renderNumberField
} from "./formFields";

const WORKOUT_TYPES = ["swim", "bike", "run"];
const DISTANCE_UNITS = ["m", "km", "yd", "mi"];

const WorkoutForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="mx-5">
      <h1>{props.title}</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Field name="description" component={renderTextField} />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type:</Label>
          <Field
            name="type"
            component={renderSelectField}
            options={WORKOUT_TYPES}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date:</Label>
          <Field name="date" component={renderDateField} />
        </FormGroup>
        <FormGroup>
          <Label for="distance">Distance:</Label>
          <Row>
            <Col>
              <Field name="distance" component={renderNumberField} />
            </Col>
            <Col>
              <Field
                name="distanceUnits"
                component={renderSelectField}
                options={DISTANCE_UNITS}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="duration">Duration:</Label>
          <Row>
            <Col>
              <Field name="hour" component={renderNumberField} label="hr" />
            </Col>
            <Col>
              <Field name="minute" component={renderNumberField} label="min" />
            </Col>
            <Col>
              <Field name="second" component={renderNumberField} label="sec" />
            </Col>
          </Row>
        </FormGroup>
        <Button type="submit" disabled={pristine || submitting} color="primary">
          Submit
        </Button>
        <Button disabled={pristine || submitting} onClick={reset}>
          Reset
        </Button>
        <Button color="warning">
          <Link to="/workouts">Cancel</Link>
        </Button>
      </Form>
    </div>
  );
};

const validate = values => {
  const errors = {};

  const REQUIRED_FIELDS = [
    "description",
    "date",
    "type",
    "distance",
    "distanceUnits",
    "hour",
    "minute",
    "second"
  ];

  _.each(REQUIRED_FIELDS, field => {
    if (!values[field]) {
      errors[field] = "Required";
    }

    if (
      (field === "distance" ||
        field === "hour" ||
        field === "minute" ||
        field === "second") &&
      (values[field] < 0 || values[field] > 99)
    ) {
      errors[field] = "Must be between 0 and 99";
    }

    if (
      field === "description" &&
      values["description"] &&
      values[field].length < 5
    ) {
      errors["description"] = "Description must be at least 5 characters long";
    }
  });

  return errors;
};

const mapStateToProps = state => {
  return {
    initialValues: {
      description: state.workout.workout.description,
      date: state.workout.workout.date,
      type: state.workout.workout.type,
      distance: state.workout.workout.distance,
      distanceUnits: state.workout.workout.distanceUnits,
      hour: state.workout.workout.hour,
      minute: state.workout.workout.minute,
      second: state.workout.workout.second
    }
  };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "workoutForm", validate, enableReinitialize: true })(
    WorkoutForm
  )
);
