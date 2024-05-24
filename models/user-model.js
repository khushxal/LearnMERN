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
const userSchema = new mongoose.Schema({
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
// This user model will contain user details
const User = new mongoose.model("User", userSchema);

export default User;
