import Book from "../models/book-model.js";
import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json({ users: users });
  } catch (error) {
    next(error);
  }
}

async function getAllQueries(req, res, next) {
  try {
    const queries = await Contact.find({});
    res.status(200).json({ queries: queries });
  } catch (error) {
    next(error);
  }
}

async function getAllBooks(req, res, next) {
  try {
    const books = await Book.find({});
    res.status(200).json({ books: books });
  } catch (error) {
    next(error);
  }
}

export default { getAllUsers, getAllQueries, getAllBooks };
