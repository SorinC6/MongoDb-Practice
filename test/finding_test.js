const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Finding Records", () => {
  let char;
  //Create tests
  beforeEach(done => {
    char = new CharCollection({
      name: "Alin"
    });
    char.save().then(() => {
      done();
    });
  });
  it("Find one record from database", done => {
    CharCollection.findOne({ name: "Alin" }).then(result => {
      assert(result.name === "Alin");
      done();
    });
  });

  it("Find one record by id from database", done => {
    CharCollection.findOne({ _id: char._id }).then(result => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
