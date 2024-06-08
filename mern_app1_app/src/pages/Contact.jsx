import React, { useEffect, useState } from "react";
import "../css/Contact.css";
import axios from "axios";
import { UseAuth } from "../auth/auth";
function Contact() {
  const URI = "http://localhost:3001/api/auth/contact";

  const { userData } = UseAuth();

  const [contactdata, setContactData] = useState({
    email: userData ? userData.email : "",
    phone: userData ? userData.phone : "",
    query: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContactData({ ...contactdata, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(URI, contactdata);
      alert(res.data.msg);
      setContactData(contactForm);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <span className="mt-5 fs-2 mx-4 fw-normal">Contact Form</span>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="form p-5 border-0 mb-1 mx-3 fs-5 fw-light"
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={contactdata.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Phone</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              onChange={handleChange}
              value={contactdata.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Query</label>
            <textarea
              name="query"
              className="form-control"
              rows={10}
              onChange={handleChange}
              value={contactdata.query}
            />
          </div>
          <div className="text-center">
            <button className="btn mx-3 w-25 mt-3" type="submit">
              Will reach you out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
