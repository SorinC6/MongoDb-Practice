const mongoose = require("mongoose");


//connect to mongoDb
mongoose.connect("mongodb://localhost/testare");

mongoose.connection
  .once("open", () => {
    console.log("Connection Working yeee! ready to rock ");
  })
  .on("error", error => {
    console.log("Connection Error ", error);
  });
