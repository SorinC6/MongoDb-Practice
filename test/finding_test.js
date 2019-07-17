const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Finding Records", () => {
  //Create tests
  beforeEach(done => {
    let char = new CharCollection({
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
});
