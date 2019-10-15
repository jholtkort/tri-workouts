import React from "react";
import { shallow } from "enzyme";

import CreateWorkout from "../../components/workoutApp/CreateWorkout";
import WorkoutForm from "../../components/workoutApp/WorkoutForm";

describe("CreateWorkout component", () => {
  let component;
  let event;
  let value;
  let prop;

  const exec = () => {
    component
      .find("WorkoutForm")
      .dive()
      .find(`#${prop}`)
      .simulate("change", event);

    expect(component.state(prop)).toBe(value);
  };

  beforeEach(() => {
    component = shallow(
      <CreateWorkout>
        <WorkoutForm />
      </CreateWorkout>
    );
    value = "test value";
    event = { target: { value } };
  });

  it("renders a WorkoutForm component", () => {
    expect(component.find("WorkoutForm").exists()).toBe(true);
  });

  it("updates the description state when description is changed", () => {
    prop = "description";

    exec();
  });

  it("updates the date state when date is changed", () => {
    prop = "date";

    exec();
  });

  it("updates the type state when type is changed", () => {
    prop = "type";

    exec();
  });

  it("updates the time state when time is changed", () => {
    prop = "time";

    exec();
  });

  it("updates the distance state when distance is changed", () => {
    prop = "distance";

    exec();
  });

  it("updates the distanceUnits state when distanceUnits is changed", () => {
    prop = "distanceUnits";

    exec();
  });

  it("updates the hour state when hour is changed", () => {
    prop = "hour";

    exec();
  });

  it("updates the minute state when minute is changed", () => {
    prop = "minute";

    exec();
  });

  it("updates the second state when second is changed", () => {
    prop = "second";

    exec();
  });
});
