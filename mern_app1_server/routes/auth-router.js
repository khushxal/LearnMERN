import express from "express";
import Controller from "../controllers/auth-controller.js";
import validate from "../middleware/validation-middleware.js";
import AuthMiddleware from "../middleware/auth-middleware.js";
import { signupSchema, signinSchema } from "../validator/auth-validator.js";

// -- Using the Express.Router() and holding it in router variable --//
const router = express.Router();

// -- Following routes are routed by router -- //

router.route("/").get(Controller.Home);

router
  .route("/register")
  .get(Controller.Register)
  .post(validate(signupSchema), Controller.Register); // using ZOD validation

router.route("/login").post(validate(signinSchema), Controller.Login); // using ZOD validation

router.route("/user").get(AuthMiddleware, Controller.UserData); //  using auth middleware to verify token and checking in database

export default router;
