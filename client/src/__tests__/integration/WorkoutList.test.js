// import React from "react";
// import { mount } from "enzyme";
// import moxios from "moxios";

// import workoutAPI from "../../api/workoutAPI";
// import WorkoutList from "../../components/workoutApp/WorkoutList";

// describe("WorkoutList component integration tests", () => {
//   let component;

//   beforeEach(() => {
//     component = mount(<WorkoutList />);

//     moxios.install();
//     moxios.stubRequest(`${workoutAPI}/workouts`, {
//       status: 200,
//       response: [
//         {
//           description: "test",
//           date: "test",
//           type: "test",
//           time: "test",
//           distance: "test",
//           distanceUnits: "test",
//           hour: "test",
//           minute: "test",
//           second: "test",
//           id: 1
//         }
//       ]
//     });
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it("fetches list of workouts", () => {});
// });
