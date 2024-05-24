// -- Following function are the controllers that are responsible for the functionallity part of the route  -- //
import User from "../models/user-model.js";
// import bycrypt from "bcrypt";

async function Home(req, res) {
  try {
    res.send("<h1>Home Landing Page</h1>");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// Registration process is completed added user (CREATE OPERATION)
async function Register(req, res) {
  try {
    console.log(req.body);
    const { username, phone, password, isAdmin } = req.body; // derefernce the array
    const userExist = await User.findOne({ username });
    // let encryptedPassword = await bycrypt.hash(password, 10);
    if (userExist) {
      res.send("<h1>User already exists please sign in to continue</h1>");
    } else {
      // create and insertMany method of mongose is used for insert operation
      const addUser = await User.create({
        username,
        phone,
        password,
        isAdmin,
      });
      // This JWT token is send to the client and will be used for authentication and authorization.
      // This token needed to be stored at the client side using cookies or local storage.
      res.status(201).json({
        msg: addUser, // object returned after added to the the database
        token: await addUser.generateToken(),
        userId: addUser._id.toString(), // Mongo created object id
      });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function About(req, res) {
  try {
    res.send("<h1>This is about page</h1>");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default { Home, Register, About };
