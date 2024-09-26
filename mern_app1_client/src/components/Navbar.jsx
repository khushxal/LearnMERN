import React from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../auth/auth";
import "../css/Navbar.css";

function Navbar() {
  const { isLoggedIn, user } = UseAuth();
  return (
    <div>
      <nav className="d-flex flex-wrap justify-content-center py-2 mb-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-3 fw-bolder">LearnMERN</span>
        </Link>

        <ul className="nav nav-pills fs-6 fw-light">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/books" className="nav-link">
                  Books
                </Link>
              </li>
              {user ? (
                user.isAdmin ? (
                  <li className="nav-item">
                    <Link to="/admin/" className="nav-link">
                      Admin
                    </Link>
                  </li>
                ) : (
                  " "
                )
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
