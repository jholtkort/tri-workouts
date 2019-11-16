import React from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  renderTextField,
  renderSelectField,
  renderDateField,
  renderNumberField
} from "./formFields";

const WORKOUT_TYPES = [
  {
    value: "",
    label: "Select"
  },
  {
    value: "Swim",
    label: "Swim"
  },
  {
    value: "Bike",
    label: "Bike"
  },
  {
    value: "Run",
    label: "Run"
  }
];
const DISTANCE_UNITS = [
  {
    value: "",
    label: "Select"
  },
  {
    value: "m",
    label: "m"
  },
  {
    value: "km",
    label: "km"
  },
  {
    value: "yd",
    label: "yd"
  },
  {
    value: "mi",
    label: "mi"
  }
];

const WorkoutForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
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
                  <Field
                    name="minute"
                    component={renderNumberField}
                    label="min"
                  />
                </Col>
                <Col>
                  <Field
                    name="second"
                    component={renderNumberField}
                    label="sec"
                  />
                </Col>
              </Row>
            </FormGroup>

            <Row>
              <Col xs="4" sm="4">
                <Button
                  color="warning"
                  className="btn waves-effect waves-light"
                >
                  <Link style={{ color: "#FFF" }} to="/workouts">
                    Cancel
                  </Link>
                </Button>
              </Col>
              <Col xs="3" sm={{ size: 2, offset: 2 }}>
                <Button
                  disabled={pristine || submitting}
                  onClick={reset}
                  className="btn waves-effect waves-light"
                >
                  Reset
                </Button>
              </Col>
              <Col xs="5" sm="4">
                <Button
                  className="btn waves-effect waves-light"
                  type="submit"
                  disabled={pristine || submitting}
                  color="primary"
                >
                  Submit
                  <i className="material-icons right">send</i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
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

    if (field === "distance" && (values[field] < 0 || values[field] > 100000)) {
      errors[field] = "Must be between 0 and 100,000";
    }

    if (field === "hour" && (values[field] < 0 || values[field] > 99)) {
      errors[field] = "Must be between 0 and 99";
    }

    if (
      (field === "minute" || field === "second") &&
      (values[field] < 0 || values[field] > 59)
    ) {
      errors[field] = "Must be between 0 and 59";
    }

    if (
      values["hour"] === 0 &&
      values["minute"] === 0 &&
      values["second"] === 0
    ) {
      errors["hour"] = "Must have a duration greater than 0";
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
  reduxForm({ form: "workoutForm", validate })(WorkoutForm)
);
