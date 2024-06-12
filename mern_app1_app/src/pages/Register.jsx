import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/auth.jsx";
import axios from "axios";
import { toast } from "react-toastify";
function Register() {
  const URI = "http://localhost:3001/api/auth/register";

  const navigate = useNavigate();

  const { storeToken } = UseAuth();

  const [userdata, setUserData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((preVal) => {
      return { ...preVal, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(URI, userdata);
      if (res.status == 201) {
        storeToken(res.data.token);
        toast.success(res.data.msg);
        navigate("/books");
      } else {
        toast.error(res.data.msg);
      }
      setUserData({
        email: "",
        username: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container col px-4 py-5">
      <div className="card row align-items-center g-lg-5 py-5">
        <div className="col-md-12 mx-auto col-lg-7">
          <form
            // autoComplete="off"
            onSubmit={handleSubmit}
            method="post"
            className="p-4 p-md-5 border rounded-3 bg-light fw-light"
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput1"
                key={1}
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
                onChange={handleChange}
                value={userdata.email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="username"
                className="form-control"
                id="floatingInput2"
                key={2}
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
                onChange={handleChange}
                value={userdata.username}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                id="floatingInput3"
                key={3}
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
                onChange={handleChange}
                value={userdata.phone}
              />
              <label htmlFor="floatingInput">Mobile</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                key={4}
                placeholder="Password"
                fdprocessedid="liawmc"
                onChange={handleChange}
                value={userdata.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              type="submit"
              className="w-100 btn btn-lg  "
              fdprocessedid="e2o1y"
            >
              Start Learing
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
        <div className="col-lg-5 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Radhe Radhe,</h1>
          <p className="col-lg-5 fs-4 fw-light">
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
