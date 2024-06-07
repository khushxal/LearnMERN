import mongoose from "mongoose";

// Define the schema for the book object
const bookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  pages: String,
  size: String,
  year: String,
  publisher: String,
  language: String,
  type: String,
  authors: String,
});

// Create a model from the schema
const Book = mongoose.model("Book", bookSchema);

export default Book;
