const assert = require("assert");
const CharCollection = require("../models/chars");

//Describe tests
describe("Updating Record", () => {
  let char;
  //Create tests
  beforeEach(done => {
    char = new CharCollection({
      name: "Ion",
      weight: 67
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

  it("Increments the weight by 1 from database", done => {
    CharCollection.update({}, { $inc: { weight: 1 } }).then(() => {
      CharCollection.findOne({ name: "Ion" }).then(result => {
        assert(result.weight === 68);
        done();
      });
    });
  });
});
