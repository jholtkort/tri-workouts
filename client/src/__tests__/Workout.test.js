import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("Workout Component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders", () => {
    expect(component.find(".test").length).toBe(0);
  });
});
