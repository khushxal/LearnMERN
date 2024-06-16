import express from "express";
import controller from "../controllers/admin-controller.js";
import AuthMiddleware from "../middleware/auth-middleware.js";
import AdminMiddleware from "../middleware/admin-middleware.js";

const router = express.Router();

router.route("/").get(AuthMiddleware, AdminMiddleware, controller.adminPage);

router
  .route("/users")
  .get(AuthMiddleware, AdminMiddleware, controller.getAllUsers);
router
  .route("/queries")
  .get(AuthMiddleware, AdminMiddleware, controller.getAllQueries);
router
  .route("/books")
  .get(AuthMiddleware, AdminMiddleware, controller.getAllBooks);
router
  .route("/profile")
  .get(AuthMiddleware, AdminMiddleware, controller.adminProfile);

router
  .route("/user/:id")
  .get(AuthMiddleware, AdminMiddleware, controller.getUserByID);

router
  .route("/user/:id")
  .put(AuthMiddleware, AdminMiddleware, controller.editUser);

router
  .route("/users/delete/:id")
  .delete(AuthMiddleware, AdminMiddleware, controller.deleteUserByID);

export default router;
