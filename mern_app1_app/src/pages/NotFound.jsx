import React from "react";
import "../css/NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container">
      <div className="card text-center">
        <h1 className="mt-5">404</h1>
        <p className="fs-1">Page Not Found</p>
        <div className="row mt-5 d-flex">
          <div className="col text-end">
            <Link to="/">
              <button className="btn w-50">Return Home</button>
            </Link>
          </div>
          <div className="col text-start">
            <Link to="contact">
              <button className="btn w-50">Report Error</button>
            </Link>
          </div>
          <p className="mt-5 ms-5 fs-3 text-center">
            Why page not found ? Check for the requested URL
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
