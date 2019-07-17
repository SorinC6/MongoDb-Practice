const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const CharSchema = new Schema({
  name: String,
  weight: Number
});

const CollectionChar = mongoose.model("charCollection", CharSchema);

module.exports = CollectionChar;


