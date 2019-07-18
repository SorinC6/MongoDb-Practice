const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Updating Record", () => {
  let char;
  //Create tests
  beforeEach(done => {
    char = new CharCollection({
      name: "Ion"
    });
    char.save().then(() => {
      done();
    });
  });
  it("Update one record from database", done => {
    CharCollection.findOneAndUpdate({ name: "Ion" }, { name: "Luis" }).then(
      () => {
        CharCollection.findOne({ _id: char._id }).then(result => {
          assert(result.name === "Luis");
          done();
        });
      }
    );
  });
});
