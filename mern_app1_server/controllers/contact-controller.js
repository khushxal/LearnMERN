// This is contact function
import ContactForm from "../models/contact-model.js";
async function Contact(req, res, next) {
  try {
    const { email, phone, query } = req.body;
    const contactDetails = await ContactForm.create({ email, phone, query });
    res.status(201).json({ msg: "Query sent successfully" });
  } catch (error) {
    next(error);
  }
}

export default { Contact };
