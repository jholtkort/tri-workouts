import React from "react";

const WorkoutForm = props => {
  let button = null;

  if (props.title === "Update Workout") {
    button = (
      <button
        onClick={() => props.handleDeleteClick(props.id)}
        className="btn btn-danger ml-3"
      >
        Delete
      </button>
    );
  }
  return (
    <div className="mx-5">
      <h1>{props.title}</h1>
      <form onSubmit={props.handleSubmit} className="mb-5">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={props.description}
            onChange={props.handleDescriptionChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
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
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={props.date}
            onChange={props.handleDateChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={props.time}
            onChange={props.handleTimeChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="distance">Distance:</label>
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                id="distance"
                value={props.distance}
                onChange={props.handleDistanceChange}
                required
              />
            </div>
            <div className="col">
              <select
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
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration:</label>

          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                min="0"
                max="99"
                id="duration"
                value={props.hour}
                onChange={props.handleHourChange}
                required
              />{" "}
              hr
            </div>
            <div className="col">
              <input
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
            </div>
            <div className="col">
              <input
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
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {button}
      </form>
    </div>
  );
};

export default WorkoutForm;
