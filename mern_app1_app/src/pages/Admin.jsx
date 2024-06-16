import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/Admin.css";
import { UseAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Admin() {
  const { isLoggedIn, token } = UseAuth();
  const navigate = useNavigate();

  const URL = "http://localhost:3001/api/admin/";

  async function getIsAdmin() {
    let response;
    try {
      response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return await response.data.user_role;
    } catch (error) {
      if (isLoggedIn) {
        toast.error("Access denied. User is not an admin.");
        navigate("/books");
      } else {
        toast.error("Login Required by admin page ");
        navigate("/logout");
      }
    }
  }

  useEffect(() => {
    getIsAdmin();
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
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Admin;
