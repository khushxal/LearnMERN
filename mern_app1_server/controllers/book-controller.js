import Book from "../models/book-model.js";

async function books(req, res, next) {
  try {
    const response = await Book.find();
    console.log(response);
    res.status(200).json({ books: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default books;
