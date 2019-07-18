const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;
