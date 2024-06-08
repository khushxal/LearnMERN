import express from "express";
import Contact from "../controllers/contact-controller.js";
import validate from "../middleware/validation-middleware.js";
import { contactSchema } from "../validator/auth-validator.js";

const router = express.Router();

router.route("/contact").post(validate(contactSchema), Contact);

export default router;
