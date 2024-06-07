import express from "express";
import books from "../controllers/book-controller.js";

const router = express.Router();

router.route("/books").get(books);

export default router;
