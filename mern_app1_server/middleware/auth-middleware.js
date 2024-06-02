import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

async function AuthMiddleware(req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ msg: "Unauthorized HTTP, Token not provided" });
    }
    const isVerified = jwt.verify(token, process.env.PRIVATE_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    console.log(error);
  }
}

export default AuthMiddleware;
