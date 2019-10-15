import React from "react";
import { shallow } from "enzyme";

import WorkoutForm from "../../components/workoutApp/WorkoutForm";

describe("WorkoutForm", () => {
  let component;
  let handleDescriptionChange;
  let handleDateChange;
  let handleTypeChange;
  let handleTimeChange;
  let handleDistanceChange;
  let handleDistanceUnitsChange;
  let handleHourChange;
  let handleMinuteChange;
  let handleSecondChange;
  let value;

  beforeEach(() => {
    handleDescriptionChange = jest.fn();
    handleDateChange = jest.fn();
    handleTypeChange = jest.fn();
    handleTimeChange = jest.fn();
    handleDistanceChange = jest.fn();
    handleDistanceUnitsChange = jest.fn();
    handleHourChange = jest.fn();
    handleMinuteChange = jest.fn();
    handleSecondChange = jest.fn();
    value = "test value";
    component = shallow(
      <WorkoutForm
        title={value}
        description={value}
        date={value}
        type={value}
        time={value}
        distance={value}
        distanceUnits={value}
        hour={value}
        minute={value}
        second={value}
        handleDescriptionChange={handleDescriptionChange}
        handleDateChange={handleDateChange}
        handleTypeChange={handleTypeChange}
        handleTimeChange={handleTimeChange}
        handleDistanceChange={handleDistanceChange}
        handleDistanceUnitsChange={handleDistanceUnitsChange}
        handleHourChange={handleHourChange}
        handleMinuteChange={handleMinuteChange}
        handleSecondChange={handleSecondChange}
      />
    );
  });

  it("renders props", () => {
    expect(component.find("h1").prop("children")).toBe(value);
    expect(component.find("#description").prop("value")).toBe(value);
    expect(component.find("#date").prop("value")).toBe(value);
    expect(component.find("#type").prop("value")).toBe(value);
    expect(component.find("#time").prop("value")).toBe(value);
    expect(component.find("#distance").prop("value")).toBe(value);
    expect(component.find("#distanceUnits").prop("value")).toBe(value);
    expect(component.find("#hour").prop("value")).toBe(value);
    expect(component.find("#minute").prop("value")).toBe(value);
    expect(component.find("#second").prop("value")).toBe(value);
  });

  it("calls handleDescriptionChange when description is changed", () => {
    component.find("#description").simulate("change", {
      target: { value }
    });

    expect(handleDescriptionChange.mock.calls.length).toBe(1);
  });

  it("calls handleDateChange when date is changed", () => {
    component.find("#date").simulate("change", {
      target: { value }
    });

    expect(handleDateChange.mock.calls.length).toBe(1);
  });

  it("calls handleTypeChange when type is changed", () => {
    component.find("#type").simulate("change", {
      target: { value }
    });

    expect(handleTypeChange.mock.calls.length).toBe(1);
  });

  it("calls handleTimeChange when time is changed", () => {
    component.find("#time").simulate("change", {
      target: { value }
    });

    expect(handleTimeChange.mock.calls.length).toBe(1);
  });

  it("calls handleDistanceChange when distance is changed", () => {
    component.find("#distance").simulate("change", {
      target: { value }
    });

    expect(handleDistanceChange.mock.calls.length).toBe(1);
  });

  it("calls handleDistanceUnitsChange when distance units are changed", () => {
    component.find("#distanceUnits").simulate("change", {
      target: { value }
    });

    expect(handleDistanceUnitsChange.mock.calls.length).toBe(1);
  });

  it("calls handleHourChange when hour is changed", () => {
    component.find("#hour").simulate("change", {
      target: { value }
    });

    expect(handleHourChange.mock.calls.length).toBe(1);
  });

  it("calls handleMinuteChange when minute is changed", () => {
    component.find("#minute").simulate("change", {
      target: { value }
    });

    expect(handleMinuteChange.mock.calls.length).toBe(1);
  });

  it("calls handleSecondChange when second is changed", () => {
    component.find("#second").simulate("change", {
      target: { value }
    });

    expect(handleSecondChange.mock.calls.length).toBe(1);
  });
});
