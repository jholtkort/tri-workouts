import React, { Component } from "react";
import axios from "axios";

class UpdateWorkout extends Component {
  state = {
    description: "",
    date: "",
    type: "",
    duration: "",
    distance: ""
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:4000/workouts/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);

        this.setState({
          description: res.data.description,
          date: res.data.date,
          type: res.data.type,
          duration: res.data.duration,
          distance: res.data.distance
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log(this.state);

    return <div>UpdateWorkout</div>;
  }
}

export default UpdateWorkout;
