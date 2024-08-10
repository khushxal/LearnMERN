import dot from "dotenv";
dot.config();
import express from "express";
import authRouter from "./routes/auth-router.js";
import bookRouter from "./routes/book-router.js";
import contactRouter from "./routes/contact-router.js";
import adminRouter from "./routes/admin-router.js";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";
import errorHandler from "./middleware/error-middleware.js";
import cors from "cors";
import serverless from "serverless-http";
const app = express();
const port = 3001;

app.use(cors());
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

// using all middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/auth", authRouter);
app.use("/api/data", bookRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use(errorHandler);

// -- Handling all req where the requested route is not available -- //

// app.get("/", function (req, res) {
//   res.send("Data");
// });

app.get("/*", function (req, res) {
  res.sendStatus(404);
});

// -- Running the server only if the database is connected-- //
connectDB().then(function () {
  app.listen(port, async function (req, res) {
    console.log(`Server hosted at http://localhost:${port}`);
  });
});
