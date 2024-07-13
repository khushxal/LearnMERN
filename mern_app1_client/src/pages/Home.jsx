import React from "react";
import "../css/Home.css";
import img from "../image/ferenc-almasi-L8KQIPCODV8-unsplash.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="row flex-lg-row-reverse align-items-center g-5 my-auto mx-auto">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Responsive Website using MERN stack Technology
            </h1>
            <p className="lead">
              Used Bootstrap for creating the frontend, multiple bootstrap
              components are used while developing this website. Obviously used
              Google for seeking help. Studied React.js, Express.js Documents
              for learning the use of features.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  fdprocessedid="od5oab"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/about">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                  fdprocessedid="r2pvtr"
                >
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
