import Book from "../models/book-model.js";
import Contact from "../models/contact-model.js";
import User from "../models/user-model.js";

async function adminPage(req, res, next) {
  try {
    res.status(200).json({ user_role: req.user.isAdmin });
  } catch (error) {
    next(error);
  }
}

async function adminProfile(req, res, next) {
  try {
    res.status(200).json({ admin: req.user });
  } catch (error) {
    next(error);
  }
}

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({}, { password: 0 });
    // if (!users || users.length === 0)
    // res.status(404).json({ msg: "No User Found" });
    res.status(200).json({ users: users });
  } catch (error) {
    next(error);
  }
}

async function deleteUserByID(req, res, next) {
  try {
    const id = req.params.id;
    const deleteUser = await User.deleteOne({ _id: id });
    res.status(200).json({ deleteUser: deleteUser });
  } catch (error) {
    next(error);
  }
}

async function getAllQueries(req, res, next) {
  try {
    const queries = await Contact.find({});
    // if (!queries || queries.length === 0)
    // res.status(404).json({ msg: "No Queries Found" });
    res.status(200).json({ queries: queries });
  } catch (error) {
    next(error);
  }
}

async function getAllBooks(req, res, next) {
  try {
    const books = await Book.find({});
    // if (!books || books.length === 0)
    // res.status(404).json({ msg: "No Books Found" });
    res.status(200).json({ books: books });
  } catch (error) {
    next(error);
  }
}

export default {
  adminProfile,
  getAllUsers,
  getAllQueries,
  getAllBooks,
  adminPage,
  deleteUserByID,
};
