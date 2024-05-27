import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <div>
      <nav class="d-flex flex-wrap justify-content-center py-2 mb-3 border-bottom">
        <Link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-3 fw-bolder">MERN App</span>
        </Link>

        <ul class="nav nav-pills fs-6 fw-light">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">
              Contact
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/register" class="nav-link">
              Sign Up
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
