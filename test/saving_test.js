//const mocha = require("mocha");
const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Saving records", () => {
  //Create tests
  it("Saves a record to database", done => {
    let char = new CharCollection({
      name: "Luk"
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  //next test
});
