import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 mb-3">
      <div className="card row align-items-center g-lg-5 py-5">
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light fw-light">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
              />
              <label htmlFor="floatingInput">Mobile</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                fdprocessedid="liawmc"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              className="w-100 btn btn-lg  "
              type="submit"
              fdprocessedid="e2o1y"
            >
              Start Learning
            </button>
            <div className="mt-3 text-center">
              <small className="text-muted">
                Already have an account <Link to="/login">Sign In</Link>
              </small>
            </div>
            <hr className="my-3" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms and condition of use.
            </small>
          </form>
        </div>
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Radhe Radhe,</h1>
          <p className="col-lg-10 fs-4 fw-light">
            Why Sign Up? <br />
          </p>
          <span>
            Access Premium Content: Get exclusive access to premium features,
            content, and resources.
          </span>
          <br />
          <span>
            Stay Updated: Receive regular updates, news, and special offers
            directly to your inbox.
          </span>
          <br />
          <span>
            Connect with Like-Minded People: Engage with a community of
            individuals who share your interests and passions.
          </span>
          <br />
          <span>
            Personalized Experience: Customize your profile and preferences to
            tailor your experience
          </span>
          <br />
          <span>
            Start Your Journey: Begin your journey with us and explore a world
            of opportunities.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
