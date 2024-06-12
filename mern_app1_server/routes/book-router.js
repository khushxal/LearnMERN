import express from "express";
import controller from "../controllers/book-controller.js";
import AuthMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.route("/books").get(AuthMiddleware, controller.book);

export default router;
