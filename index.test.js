const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");
const { userSeed } = require("./seed/users.json");

console.log(userSeed[0]);
describe("Social Sequelize Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
    //console.log("Seeding done");
    //seed();
  });

  // Write your tests here

  test("User model can insert and query all users", async () => {
    const createdUser = await User.create(userSeed[0]);
    expect(createdUser).toEqual(expect.objectContaining(userSeed[0]));
  });
});
