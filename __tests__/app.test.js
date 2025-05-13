const { userData, favesData } = require("../db/data/test-data/");
const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const request = require("supertest");

const app = require("../app");

const endpointsJson = require("../endpoints.json");

beforeEach(() => seed({ userData, favesData }));
afterAll(() => db.end());

describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    return request(app)
      .get("/api")
      .expect(200)

      .then(({ body: { endpoints } }) => {
        expect(endpoints).toEqual(endpointsJson);
      });
  });
});

describe("GET /api/users", () => {
  test("200: Responds with a list of users", () => {
    return request(app)
      .get("/api/users")
      .expect(200)

      .then(({ body: { users } }) => {
        expect(users.length).toBe(2);
        users.forEach((user) => {
          expect(typeof user.username).toBe("string");
          expect(typeof user.email).toBe("string");
          expect(typeof user.password_hashed).toBe("string");
          expect(typeof user.created_at).toBe("string");
        });
      });
  });
});

describe("GET /api/users/:username", () => {
  test("200: Responds with the requested user", () => {
    return request(app)
      .get("/api/users/bob")
      .expect(200)

      .then(({ body: { user } }) => {
        expect(user.username).toBe("bob");
        expect(user.email).toBe("bob@bob.com");
        expect(user.password_hashed).toBe("svesgsevaesrdwefs235r2twfcd");
      });
  });
  test("404: Responds with an error message when given a non-existent username", () => {
    return request(app)
      .get("/api/users/billandbentheflowerpotmen")
      .expect(404)

      .then(({ body }) => {
        expect(body.msg).toBe("Not found");
      });
  });
});