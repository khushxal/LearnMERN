import React from "react";
import "../css/Contact.css";
function Contact() {
  return (
    <div className="container mb-3">
      <div className="card">
        <span className="fs-2 mx-4 fw-normal">Contact Form</span>
        <form className="form p-5 border-0 mb-auto mx-3 fs-5 fw-light">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Phone</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Query</label>
            <textarea className="form-control" rows={10} defaultValue={""} />
          </div>
        </form>
        <div className="container text-center mt-2">
          <button className="btn" type="submit">
            Will reach you out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
