import mongoose from "mongoose";
// import user from "../models/user-model";
// connecting to MongoDB using Mongoose

async function connectDB() {
  try {
    // using dotenv to hide essential passwords
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

export default connectDB;
