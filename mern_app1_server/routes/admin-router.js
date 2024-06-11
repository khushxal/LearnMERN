import express from "express";
import controller from "../controllers/admin-controller.js";
import AuthMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();

router.route("/users").get(AuthMiddleware, controller.getAllUsers);
router.route("/queries").get(AuthMiddleware, controller.getAllQueries);
router.route("/books").get(AuthMiddleware, controller.getAllBooks);
router.route("/profile").get(AuthMiddleware, controller.adminProfile);

export default router;
