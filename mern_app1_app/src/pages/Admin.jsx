import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Admin.css";
function Admin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 card me-1">
          <div className="mt-4 fs-3 mx-2">Radhe Radhe Admin</div>
          <hr />
          <div>
            <ul className="fs-5 text-uppercase fw-bolder bg-white rounded-3 ">
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
