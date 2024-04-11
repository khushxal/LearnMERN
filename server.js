import express from "express";
import router from "./routes/auth-router.js";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api/auth", router);

// -- Handling all req where the requested route is not available -- //

app.get("/*", function (req, res) {
  res.sendStatus(404);
});

// -- Running the server -- //

app.listen(port, function (req, res) {
  console.log(`Server hosted at http://localhost:${port}/api/auth`);
});
