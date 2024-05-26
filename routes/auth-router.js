import express from "express";
import Controller from "../controllers/auth-controller.js";
import validate from "../middleware/validation-middleware.js";
import {
  signupSchema,
  signinSchema,
  contactSchema,
} from "../validator/auth-validator.js";

const app = express();
// -- Using the Express.Router() and holding it in router variable --//

const router = express.Router();

// -- Following routes are routed by router -- //

router.route("/").get(Controller.Home);

router.route("/register").post(validate(signupSchema), Controller.Register); // using ZOD validation

router.route("/login").post(validate(signinSchema), Controller.Login); // using ZOD validation

router
  .route("/contact")
  .get(Controller.Contact)
  .post(validate(contactSchema), Controller.Contact);

router.route("/about").get(Controller.About);

export default router;
