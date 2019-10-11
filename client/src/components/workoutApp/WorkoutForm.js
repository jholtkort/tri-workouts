import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const WorkoutForm = props => {
  let button = null;

  if (props.title === "Update Workout") {
    button = (
      <Button
        onClick={() => props.handleDeleteClick(props.id)}
        color="danger"
        className="ml-2"
      >
        Delete
      </Button>
    );
  }
  return (
    <div className="mx-5">
      <h1>{props.title}</h1>
      <Form onSubmit={props.handleSubmit} className="mb-5">
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            id="description"
            value={props.description}
            onChange={props.handleDescriptionChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="type">Type:</Label>
          <Input
            type="select"
            value={props.type}
            onChange={props.handleTypeChange}
            id="type"
            className="form-control"
            required
          >
            <option value="">Select</option>
            <option value="Swim">Swim</option>
            <option value="Bike">Bike</option>
            <option value="Run">Run</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="date"
            className="form-control"
            id="date"
            value={props.date}
            onChange={props.handleDateChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="time">Time:</Label>
          <Input
            type="time"
            className="form-control"
            id="time"
            value={props.time}
            onChange={props.handleTimeChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="distance">Distance:</Label>
          <Row>
            <Col>
              <Input
                type="number"
                className="form-control"
                id="distance"
                value={props.distance}
                onChange={props.handleDistanceChange}
                required
              />
            </Col>
            <Col>
              <Input
                type="select"
                value={props.distanceUnits}
                onChange={props.handleDistanceUnitsChange}
                id="distance"
                className="form-control"
                required
              >
                <option value="">Select</option>
                <option value="mi">mi</option>
                <option value="yd">yd</option>
                <option value="km">km</option>
                <option value="m">m</option>
              </Input>
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <Label for="duration">Duration:</Label>
          <Row>
            <Col>
              <Input
                type="number"
                className="form-control"
                min="0"
                max="99"
                id="duration"
                value={props.hour}
                onChange={props.handleHourChange}
                required
              />
              hr
            </Col>
            <Col>
              <Input
                type="number"
                className="form-control"
                min="0"
                max="99"
                id="duration"
                value={props.minute}
                onChange={props.handleMinuteChange}
                required
              />{" "}
              min
            </Col>
            <Col>
              <Input
                type="number"
                className="form-control"
                min="0"
                max="99"
                id="duration"
                value={props.second}
                onChange={props.handleSecondChange}
                required
              />{" "}
              sec
            </Col>
          </Row>
        </FormGroup>

        <Button type="submit" color="primary">
          Submit
        </Button>
        {button}
      </Form>
    </div>
  );
};

export default WorkoutForm;
