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

  it("passes a title prop of 'Create Workout' to WorkoutForm", () => {
    expect(component.find("WorkoutForm").prop("title")).toBe("Create Workout");
  });

  it("updates the state.description when description is changed", () => {
    prop = "description";

    exec();
  });

  it("updates the state.date when date is changed", () => {
    prop = "date";

    exec();
  });

  it("updates the state.type when type is changed", () => {
    prop = "type";

    exec();
  });

  it("updates the state.time when time is changed", () => {
    prop = "time";

    exec();
  });

  it("updates the state.distance when distance is changed", () => {
    prop = "distance";

    exec();
  });

  it("updates the state.distanceUnits when distanceUnits is changed", () => {
    prop = "distanceUnits";

    exec();
  });

  it("updates the state.hour when hour is changed", () => {
    prop = "hour";

    exec();
  });

  it("updates the state.minute when minute is changed", () => {
    prop = "minute";

    exec();
  });

  it("updates the state.second when second is changed", () => {
    prop = "second";

    exec();
  });

  it("should call preventDefault on empty form", () => {
    const mockPreventDefault = jest.fn();

    const mockEvent = {
      preventDefault: mockPreventDefault
    };

    component.instance().handleSubmit(mockEvent);

    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
