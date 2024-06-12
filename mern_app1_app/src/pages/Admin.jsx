import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Admin.css";
import { UseAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Admin() {
  const { isLoggedIn } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("Access denied. User is not an admin.");
      navigate("/books");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 card me-1">
          <div className="mt-4 fs-3 mx-2">Radhe Radhe Admin</div>
          <hr />
          <div>
            <ul className="fs-5 text-uppercase fw-bolder rounded-3 bg-white ">
              <li className="nav-item">
                <Link to={""} className="nav-link">
                  👤 Admin Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"users"} className="nav-link">
                  👥 Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"queries"} className="nav-link">
                  ❔ Queries
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"books"} className="nav-link">
                  📚 Books
                </Link>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="col-8 card">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
