const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Deleting Record", () => {
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
  it("Delete one record from database", done => {
    CharCollection.findOneAndRemove({ name: "Alin" }).then(() => {
      CharCollection.findOne({ name: "Alin" }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
