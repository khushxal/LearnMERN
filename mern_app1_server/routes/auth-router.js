import express from "express";
import Controller from "../controllers/auth-controller.js";
import validate from "../middleware/validation-middleware.js";
import {
  signupSchema,
  signinSchema,
  contactSchema,
} from "../validator/auth-validator.js";
import cors from "cors";
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// -- Using the Express.Router() and holding it in router variable --//
const router = express.Router();
app.use(cors());

// -- Following routes are routed by router -- //

router.route("/").get(Controller.Home);

router
  .route("/register")
  .get(Controller.Register)
  .post(validate(signupSchema), Controller.Register); // using ZOD validation

router.route("/login").post(validate(signinSchema), Controller.Login); // using ZOD validation

router
  .route("/contact")
  .get(Controller.Contact)
  .post(validate(contactSchema), Controller.Contact);

router.route("/about").get(Controller.About);

export default router;
