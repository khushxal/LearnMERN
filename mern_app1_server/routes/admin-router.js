import express from "express";
import controller from "../controllers/admin-controller.js";

const router = express.Router();

router.route("/users").get(controller.getAllUsers);
router.route("/queries").get(controller.getAllQueries);
router.route("/books").get(controller.getAllBooks);
router.route("/profile").get(controller.adminProfile);

export default router;
