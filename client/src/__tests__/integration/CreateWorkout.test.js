import React from "react";
import { shallow, mount } from "enzyme";
import moxios from "moxios";
import workoutAPI from "../../api/workoutAPI";

import CreateWorkout from "../../components/workoutApp/CreateWorkout";
import WorkoutForm from "../../components/workoutApp/WorkoutForm";

describe("CreateWorkout integration tests", () => {
  let component;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${workoutAPI}/workouts`, {
      status: 200,
      response: [
        {
          description: "test",
          date: "test",
          type: "test",
          time: "test",
          distance: "test",
          distanceUnits: "test",
          hour: "test",
          minute: "test",
          second: "test",
          id: 1
        }
      ]
    });

    component = mount(<CreateWorkout />);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("can post a new workout", () => {
    // console.log(component.debug());
  });
});
