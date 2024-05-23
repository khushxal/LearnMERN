import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/mern_app1";
const URI =
  "mongodb+srv://vkkhushal18:05102003Kk@mernappcluster0.p8pl0h1.mongodb.net/mern_app1?retryWrites=true&w=majority&appName=MernAPPCluster0";

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

export default connectDB;
