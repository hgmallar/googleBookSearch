const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  link: {  type: String },
  image: { type: String, default: "https://via.placeholder.com/200" },
  description: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
