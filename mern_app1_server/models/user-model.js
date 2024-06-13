//  Database
//     |
//     v
//  Collection
//     |
//     v
//  Documents

//  schema - Define the model of the documents.
//  Model - How the basic entity will look, contain all fields , interact with database amd provide crud operatio. Created from schema. Higher level of abstracion.
import mongoose from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// This method will run just before the save method.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    try {
      const saltRound = await bycrypt.genSalt(10);
      const hashedPassword = await bycrypt.hash(this.password, saltRound);
      this.password = hashedPassword;
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
});

// This method will create a token using private key.
// Will remember the userID, username and isAdmin field in the token.
userSchema.methods.generateToken = async function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.PRIVATE_KEY, // this is private key or secret key.
    {
      expiresIn: "30d", // token valid till.
    }
  );
};

userSchema.methods.comparePassword = async function (password) {
  return bycrypt.compare(password, this.password);
};

// This user model will contain user details.
const User = new mongoose.model("User", userSchema);

export default User;
