import express from "express";
import controller from "../controllers/book-controller.js";

const router = express.Router();

router.route("/books").get(controller.book);

export default router;
