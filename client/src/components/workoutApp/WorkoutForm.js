import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import moment from "moment";
import PropTypes from "prop-types";

class WorkoutForm extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    type: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    distanceUnits: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired,
    second: PropTypes.number.isRequired
  };

  state = {
    description: this.props.description,
    date: moment(this.props.date).format("YYYY-MM-DD"),
    type: this.props.type,
    distance: this.props.distance,
    distanceUnits: this.props.distanceUnits,
    hour: this.props.hour,
    minute: this.props.minute,
    second: this.props.second
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    let button = null;

    if (this.props.title === "Update Workout") {
      button = (
        <Button
          onClick={() => this.props.handleDeleteClick(this.props.id)}
          color="danger"
          className="ml-2 deleteButton"
        >
          Delete
        </Button>
      );
    }

    return (
      <div className="mx-5">
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.handleSubmit} className="mb-5">
          <FormGroup>
            <Label for="description">Description:</Label>
            <Input
              type="text"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="type">Type:</Label>
            <Input
              type="select"
              value={this.state.type}
              onChange={this.handleChange}
              id="type"
              className="form-control"
              required
            >
              <option value="">Select</option>
              <option value="swim">Swim</option>
              <option value="bike">Bike</option>
              <option value="run">Run</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="date">Date:</Label>
            <Input
              type="date"
              className="form-control"
              id="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          {/* <FormGroup>
            <Label for="time">Time:</Label>
            <Input
              type="time"
              className="form-control"
              id="time"
              value={this.state.time}
              onChange={this.handleChange}
              required
            />
          </FormGroup> */}

          <FormGroup>
            <Label for="distance">Distance:</Label>
            <Row>
              <Col>
                <Input
                  type="number"
                  className="form-control"
                  id="distance"
                  value={this.state.distance}
                  onChange={this.handleChange}
                  required
                />
              </Col>
              <Col>
                <Input
                  type="select"
                  value={this.state.distanceUnits}
                  onChange={this.handleChange}
                  id="distanceUnits"
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
                  id="hour"
                  value={this.state.hour}
                  onChange={this.handleChange}
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
                  id="minute"
                  value={this.state.minute}
                  onChange={this.handleChange}
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
                  id="second"
                  value={this.state.second}
                  onChange={this.handleChange}
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
  }
}

export default WorkoutForm;

// class WorkoutForm extends Component {
//   onSubmit = formValues => {
//     this.props.onSubmit(formValues);
//   };

//   render() {
//     const { handleSubmit, pristine, reset, submitting } = this.props
//     return (
//       <div>
//         <h3>{this.props.title}</h3>
//         <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
//           <Field
//             name="description"
//             component={renderField}
//             type="text"
//             label="Description"
//             placeholder="Description"
//           />

//           <label>Date</label>
//           <div>
//             <Field
//               name="date"
//               component="input"
//               type="date"
//               placeholder="Date"
//             />
//           </div>

//           <label>Type</label>
//           <div>
//             <Field name="type" component="select">
//               <option />
//               <option value="swim">Swim</option>
//               <option value="bike">Bike</option>
//               <option value="run">Run</option>
//             </Field>
//           </div>

//           <label>Time</label>
//           <div>
//             <Field
//               name="time"
//               component="input"
//               type="text"
//               placeholder="Time"
//             />
//           </div>

//           <label>Distance</label>
//           <div>
//             <Field
//               name="distance"
//               component="input"
//               type="text"
//               placeholder="Distance"
//             />
//           </div>

//           <label>DistanceUnits</label>
//           <div>
//             <Field name="distanceUnits" component="select">
//               <option />
//               <option value="m">m</option>
//               <option value="km">km</option>
//               <option value="yd">yd</option>
//               <option value="yd">yd</option>
//               <option value="mi">mi</option>
//             </Field>
//           </div>

//           <label>Hour</label>
//           <div>
//             <Field
//               name="hour"
//               component="input"
//               type="text"
//               placeholder="Hour"
//             />
//           </div>

//           <label>Minute</label>
//           <div>
//             <Field
//               name="minute"
//               component="input"
//               type="text"
//               placeholder="Minute"
//             />
//           </div>

//           <label>Second</label>
//           <div>
//             <Field
//               name="second"
//               component="input"
//               type="text"
//               placeholder="Second"
//             />
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// // const validate = formValues => {
// //   const errors = {};
// //   if (!formValues.description) {
// //     errors.description = "You must enter a description";
// //   }

// //   return errors;
// // };

// export default reduxForm({
//   form: "workoutForm"
//   // validate
// })(WorkoutForm);
