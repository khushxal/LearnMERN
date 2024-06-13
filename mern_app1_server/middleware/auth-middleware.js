import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

async function AuthMiddleware(req, res, next) {
  try {
    const bearerToken = req.header("Authorization");
    if (!bearerToken) {
      res.status(401).json({ msg: "Unauthoraized access" });
    }
    const token = bearerToken.replace("Bearer ", "");
    const isVerified = jwt.verify(token, process.env.PRIVATE_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized access" });
  }
}

export default AuthMiddleware;
