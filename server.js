import dot from "dotenv";
dot.config();
import express from "express";
import router from "./routes/auth-router.js";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
import errorHandler from "./middleware/error-middleware.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use("/api/auth", router);
app.use(errorHandler);

// -- Handling all req where the requested route is not available -- //

app.get("/*", function (req, res) {
  res.sendStatus(404);
});

// -- Running the server only if the database is connected-- //
connectDB().then(function () {
  app.listen(port, function (req, res) {
    console.log(`Server hosted at http://localhost:${port}/api/auth`);
  });
});
