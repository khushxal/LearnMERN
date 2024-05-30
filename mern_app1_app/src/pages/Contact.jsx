import React, { useState } from "react";
import "../css/Contact.css";
function Contact() {
  const [contactdata, setContactData] = useState({
    email: "",
    phone: "",
    query: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContactData({ ...contactdata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(contactdata);
  }

  return (
    <div className="container mb-5">
      <div className="card">
        <span className="mt-5 fs-2 mx-4 fw-normal">Contact Form</span>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="form p-5 border-0 mb-1 mx-3 fs-5 fw-light"
        >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={contactdata.email}
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Query</label>
            <textarea
              name="query"
              className="form-control"
              rows={10}
              defaultValue=""
              onChange={handleChange}
              value={contactdata.query}
              required
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
