const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//connect to the database before the test run
before(done => {
  //connect to mongoDb
  mongoose.connect("mongodb://localhost/testare");

  mongoose.connection
    .once("open", () => {
      console.log("Connection Working yeee! ready to rock ");
      done();
    })
    .on("error", error => {
      console.log("Connection Error ", error);
    });
});

//Drop the characters colection before each test
beforeEach(done => {
  //drop the collection
  mongoose.connection.collections.charcollections.drop().then(() => {
    done();
  });
});
