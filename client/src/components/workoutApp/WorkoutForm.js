import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

class WorkoutForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    let button;

    // if (this.props.title === "Update Workout") {
    //   button = <button onClick={this.props.handleDelete}>Delete</button>;
    // }

    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <label>Description</label>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
            />
          </div>
          {button}
          <button>Submit</button>
        </form>
      </div>
    );
  }

  // const { handleSubmit, pristine, reset, submitting } = props;
  // return (
  //   <div className="mx-5">
  //     <Form onSubmit={handleSubmit} className="mb-5">
  //       <Label>Description</Label>
  //       <div>
  //         <Field
  //           name="description"
  //           component="input"
  //           type="text"
  //           placeholder="Description"
  //         />
  //       </div>

  //       <Label>Date</Label>
  //       <div>
  //         <Field name="date" component="input" type="date" placeholder="Date" />
  //       </div>
  //       <Label>Type</Label>
  //       <div>
  //         <Field name="type" component="select">
  //           <option />
  //           <option value="swim">Swim</option>
  //           <option value="bike">Bike</option>
  //           <option value="run">Run</option>
  //         </Field>
  //       </div>
  //       <Label>Time</Label>
  //       <div>
  //         <Field name="time" component="input" type="text" placeholder="Time" />
  //       </div>
  //       <Label>Distance</Label>
  //       <div>
  //         <Field
  //           name="distance"
  //           component="input"
  //           type="text"
  //           placeholder="Distance"
  //         />
  //       </div>
  //       <Label>Distance Units</Label>
  //       <div>
  //         <Field
  //           name="distanceUnits"
  //           component="input"
  //           type="text"
  //           placeholder="Distance Units"
  //         />
  //       </div>
  //       <Label>Hour</Label>
  //       <div>
  //         <Field name="hour" component="input" type="text" placeholder="Hour" />
  //       </div>
  //       <Label>Minute</Label>
  //       <div>
  //         <Field
  //           name="minute"
  //           component="input"
  //           type="text"
  //           placeholder="Minute"
  //         />
  //       </div>
  //       <Label>Second</Label>
  //       <div>
  //         <Field
  //           name="second"
  //           component="input"
  //           type="text"
  //           placeholder="Second"
  //         />
  //       </div>

  //       <Button type="submit" color="primary">
  //         Submit
  //       </Button>
  //     </Form>
  //   </div>
  // );
}

export default reduxForm({
  form: "workoutForm" // a unique identifier for this form
})(WorkoutForm);

// import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

// const WorkoutForm = props => {
//   let button = null;

//   if (props.title === "Update Workout") {
//     button = (
//       <Button
//         onClick={() => props.handleDeleteClick(props.id)}
//         color="danger"
//         className="ml-2 deleteButton"
//       >
//         Delete
//       </Button>
//     );
//   }
//   const {
//     description,
//     date,
//     type,
//     time,
//     distance,
//     distanceUnits,
//     hour,
//     minute,
//     second
//   } = props.initialValues;
//   console.log(props.initialValues);

//   return (
//     <div className="mx-5">
//       <h1>{props.title}</h1>
//       <Form onSubmit={props.handleSubmit} className="mb-5">
//         <FormGroup>
//           <Label for="description">Description:</Label>
//           <Input
//             type="text"
//             id="description"
//             value={description}
//             onChange={props.handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="type">Type:</Label>
//           <Input
//             type="select"
//             value={type}
//             onChange={props.handleChange}
//             id="type"
//             className="form-control"
//             required
//           >
//             <option value="">Select</option>
//             <option value="swim">Swim</option>
//             <option value="bike">Bike</option>
//             <option value="run">Run</option>
//           </Input>
//         </FormGroup>

//         <FormGroup>
//           <Label for="date">Date:</Label>
//           <Input
//             type="date"
//             className="form-control"
//             id="date"
//             value={date}
//             onChange={props.handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="time">Time:</Label>
//           <Input
//             type="time"
//             className="form-control"
//             id="time"
//             value={time}
//             onChange={props.handleChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="distance">Distance:</Label>
//           <Row>
//             <Col>
//               <Input
//                 type="number"
//                 className="form-control"
//                 id="distance"
//                 value={distance}
//                 onChange={props.handleChange}
//                 required
//               />
//             </Col>
//             <Col>
//               <Input
//                 type="select"
//                 value={distanceUnits}
//                 onChange={props.handleChange}
//                 id="distanceUnits"
//                 className="form-control"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="mi">mi</option>
//                 <option value="yd">yd</option>
//                 <option value="km">km</option>
//                 <option value="m">m</option>
//               </Input>
//             </Col>
//           </Row>
//         </FormGroup>

//         <FormGroup>
//           <Label for="duration">Duration:</Label>
//           <Row>
//             <Col>
//               <Input
//                 type="number"
//                 className="form-control"
//                 min="0"
//                 max="99"
//                 id="hour"
//                 value={hour}
//                 onChange={props.handleChange}
//                 required
//               />
//               hr
//             </Col>
//             <Col>
//               <Input
//                 type="number"
//                 className="form-control"
//                 min="0"
//                 max="99"
//                 id="minute"
//                 value={minute}
//                 onChange={props.handleChange}
//                 required
//               />{" "}
//               min
//             </Col>
//             <Col>
//               <Input
//                 type="number"
//                 className="form-control"
//                 min="0"
//                 max="99"
//                 id="second"
//                 value={second}
//                 onChange={props.handleChange}
//                 required
//               />{" "}
//               sec
//             </Col>
//           </Row>
//         </FormGroup>

//         <Button type="submit" color="primary">
//           Submit
//         </Button>
//         {button}
//       </Form>
//     </div>
//   );
// };

// export default WorkoutForm;
