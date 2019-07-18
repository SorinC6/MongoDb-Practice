const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

//describe the AWESOME test
describe("Nesting records testing", () => {
  it("Creates a author with sub-documents", done => {
    var newAuthor = new Author({
      name: "Chis Sorin",
      books: [{ title: "Name of the beast", pages: 1000 }]
    });
    newAuthor.save().then(() => {
      Author.findOne({ name: "Chis Sorin" }).then(record => {
        assert(record.books.length === 1);
        done();
      });
    });
  });
});
