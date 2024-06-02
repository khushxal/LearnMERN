import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

async function AuthMiddleware(req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const isVerified = jwt.verify(token, process.env.PRIVATE_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    next();
  }
}

export default AuthMiddleware;
