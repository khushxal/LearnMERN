import Book from "../models/book-model.js";

async function book(req, res, next) {
  try {
    const response = await Book.find();
    res.status(200).json({ books: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default { book };
