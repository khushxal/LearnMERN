import express from "express";
import Controller from "../controllers/auth-controller.js";

const app = express();
// -- Using the Express.Router() and holding it in router variable --//

const router = express.Router();

// -- Following routes are routed by router -- //

router.route("/").get(Controller.Home);

router.route("/register").post(Controller.Register);

export default router;
