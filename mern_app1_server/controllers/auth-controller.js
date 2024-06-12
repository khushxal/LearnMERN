// -- Following function are the controllers that are responsible for the functionallity part of the route  -- //
import User from "../models/user-model.js";
// import bycrypt from "bcrypt";

// Registration process is completed added user (CREATE OPERATION)
async function Register(req, res, next) {
  try {
    const { email, username, phone, password, isAdmin } = req.body; // derefernce the array
    const userExist = await User.findOne({ email });
    // let encryptedPassword = await bycrypt.hash(password, 10);
    if (userExist) {
      res.status(208).json({ msg: "User with this email already present" });
    } else {
      // create and insertMany method of mongose is used for insert operation
      const addUser = await User.create({
        username,
        email,
        phone,
        password,
        isAdmin,
      });
      // This JWT token is send to the client and will be used for authentication and authorization.
      // This token needed to be stored at the client side using cookies or local storage.
      res.status(201).json({
        msg: "User Registered", // object returned after added to the the database
        token: await addUser.generateToken(),
        userId: addUser._id.toString(), // Mongo created object id
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// This is login function
async function Login(req, res, next) {
  try {
    const { email, password } = req.body; // Holding data from user
    const userExist = await User.findOne({ email }); // Check for user email in database
    if (userExist) {
      if (await userExist.comparePassword(password)) {
        // using instance method (user-defined) created by userSchema
        res.status(200).json({
          // Returing the data if authorized
          msg: "Log-in successfull",
          token: await userExist.generateToken(),
          userId: userExist._id,
        });
      } else {
        // res.sendStatus(401); //  return unauthorized
        const error = {
          status: 200,
          msg: "Invalid Credential",
          extraDetails: "Unauthorized",
        };
        next(error);
      }
    } else {
      const error = {
        status: 200,
        msg: "Invalid Credential",
        extraDetails: "Unauthorized",
      };
      next(error);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// This is User
function UserData(req, res, next) {
  try {
    const userData = req.user;
    res.status(200).json({ userData, userToken });
  } catch (error) {
    next(error);
  }
}

// Exporting all the function
export default { Register, Login, UserData };
