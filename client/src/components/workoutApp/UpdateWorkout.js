import _ from "lodash";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import WorkoutForm from "./WorkoutForm";
import workoutAPI from "../../api/workoutAPI";
import { getWorkoutById } from "../../actions/workoutActions";

class UpdateWorkout extends Component {
  componentDidMount() {
    this.props.getWorkoutById(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // TODO
  };

  render() {
    if (this.props.workout._id === this.props.match.params.id) {
      return (
        <div>
          <h3>Update Workout</h3>
          <WorkoutForm
            initialValues={_.pick(
              this.props.workout,
              "description",
              "date",
              "type",
              "time",
              "distance",
              "distanceUnits",
              "hour",
              "minute",
              "second"
            )}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  // state = {
  //   id: null,
  //   description: "",
  //   date: "",
  //   type: "",
  //   time: "",
  //   distance: "",
  //   distanceUnits: "",
  //   hour: "",
  //   minute: "",
  //   second: ""
  // };
  // static propTypes = {
  //   getWorkoutById: PropTypes.func.isRequired
  // };
  // componentDidMount = () => {
  //   this.props.getWorkoutById(this.props.match.params.id);
  // };
  // handleChange = e => {
  //   this.setState({ [e.target.id]: e.target.value });
  // };
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const {
  //     id,
  //     description,
  //     date,
  //     type,
  //     time,
  //     distance,
  //     distanceUnits,
  //     hour,
  //     minute,
  //     second
  //   } = this.state;
  //   await workoutAPI.put(`/workouts/${this.props.match.params.id}`, {
  //     id,
  //     description,
  //     date,
  //     type,
  //     time,
  //     distance,
  //     distanceUnits,
  //     hour,
  //     minute,
  //     second
  //   });
  //   this.props.history.push("/");
  // };
  // handleDeleteClick = async id => {
  //   await workoutAPI.delete(`/workouts/${id}`);
  //   this.props.history.push("/");
  // };
  // render() {
  //   console.log(this.props.workout.updateWorkout);
  //   if (!this.props.workout.updateWorkout) {
  //     return <div>Loading</div>;
  //   }
  // else {
  //   this.setState({
  //     id: this.props.workout.updateWorkout._id,
  //     description: this.props.workout.updateWorkout.description,
  //     date: this.props.workout.updateWorkout.date,
  //     type: this.props.workout.updateWorkout.type,
  //     time: this.props.workout.updateWorkout.time,
  //     distance: this.props.workout.updateWorkout.distance,
  //     distanceUnits: this.props.workout.updateWorkout.distanceUnits,
  //     hour: this.props.workout.updateWorkout.hour,
  //     minute: this.props.workout.updateWorkout.minute,
  //     second: this.props.workout.updateWorkout.second
  //   });
  // }
  // console.log(this.state);
  // return <div>LOADED</div>;
  // if (this.state.redirect) {
  //   return <Redirect to="/" />;
  // }
  //   return (
  //     <div>
  //       <WorkoutForm
  //         title="Update Workout"
  //         id={this.state.id}
  //         description={this.state.description}
  //         date={this.state.date}
  //         type={this.state.type}
  //         time={this.state.time}
  //         distance={this.state.distance}
  //         distanceUnits={this.state.distanceUnits}
  //         hour={this.state.hour}
  //         minute={this.state.minute}
  //         second={this.state.second}
  //         handleSubmit={this.handleSubmit}
  //         handleChange={this.handleChange}
  //         handleDeleteClick={this.handleDeleteClick}
  //       />
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state, ownProps) => {
  return { workout: state.workout.workouts };
};

export default connect(
  mapStateToProps,
  { getWorkoutById }
)(UpdateWorkout);
