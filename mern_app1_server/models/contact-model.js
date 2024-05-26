import mongoose from "mongoose";

// Contact Schema
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  query: {
    type: String,
    required: true,
  },
});

// Contact Model
const Contact = new mongoose.model("Contact", contactSchema);

export default Contact;
