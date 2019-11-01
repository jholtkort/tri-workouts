const request = require("supertest");
// const { Workout } = require("../../models/workouts");
// const mongoose = require("mongoose");

let server;

describe("/api/workouts", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("GET /", () => {
    it("should return all the workouts", async () => {
      const workouts = [{ name: "workout1" }];

      const res = await request(server).get("api/genres");

      console.log(res);

      //   expect(res.status).toBe(200);
    });
  });
});
