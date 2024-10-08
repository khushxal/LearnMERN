import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UseAuth } from "../auth/auth";
import axios from "axios";
import { toast } from "react-toastify";
import "../css/Login.css";
function Login() {
  const URI = import.meta.env.VITE_SERVER_API + "/api/auth/login";

  const location = useLocation();
  const navigate = useNavigate();

  const { storeToken } = UseAuth();

  const [data, setData] = useState({
    email: location.state ? location.state.email : "",
    password: location.state ? location.state.password : "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData(function (prevVal) {
      return { ...prevVal, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(URI, data);
      if (res.data.token) {
        storeToken(res.data.token);
        toast.success(res.data.msg);
        checkIsAdmin(res);
      } else {
        toast.error(res.data.msg);
      }
      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function checkIsAdmin(res) {
    if (await res.data.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/books");
    }
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="card row align-content-center g-lg-5 py-5">
        <div className="col-lg-6 text-center">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            MERN App, Welcomes you
          </h1>
          <p className="col-lg-12 fs-4 fw-light">
            Sign In to explore more features. Learn with creativity <br />
            We are here to make you learn and enhance you skills.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            autoComplete="on"
            method="post"
            onSubmit={handleSubmit}
            className="p-4 p-md-5 border rounded-3 bg-light fw-light"
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                fdprocessedid="ax6fo5"
                onChange={handleChange}
                value={data.email}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                fdprocessedid="liawmc"
                onChange={handleChange}
                value={data.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg  "
              type="submit"
              fdprocessedid="e2o1y"
            >
              Sign In
            </button>
            <hr className="my-4" />
            <div className="text-center">
              <small className="text-muted">
                Create an account <Link to="/register">Sign Up</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
