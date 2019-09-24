import React from "react";

const WorkoutForm = props => {
  return (
    <div className="mx-5 mt-5">
      <h1>{props.title}</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={props.description}
            onChange={props.handleDescriptionChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={props.date}
            onChange={props.handleDateChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            value={props.type}
            onChange={props.handleTypeChange}
            id="type"
            className="form-control"
          >
            <option value="">Select</option>
            <option value="Swim">Swim</option>
            <option value="Bike">Bike</option>
            <option value="Run">Run</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={props.time}
            onChange={props.handleTimeChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="distance">Distance:</label>
          <input
            type="text"
            className="form-control"
            id="distance"
            value={props.distance}
            onChange={props.handleDistanceChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
