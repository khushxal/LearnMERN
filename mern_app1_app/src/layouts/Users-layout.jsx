import axios from "axios";
import { useEffect, useState } from "react";
import { UseAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";
function Users() {
  const URL = "http://localhost:3001/api/admin";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const { token } = UseAuth();
  const navigate = useNavigate();

  async function getAllUsers() {
    setLoading("Loading....");
    try {
      const response = await axios.get(URL + "/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.users.length === 0) {
        setLoading("No User Found");
      } else {
        setUsers(await response.data.users);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(function () {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <div className="row mb-3 fs-4 fw-bold">
        {loading ? (
          <div className="text-center fs-1 text-dark fw-bold">{loading}</div>
        ) : (
          <div className="grid-container">
            {users.map((user, index) => (
              <div className="col card w-auto" key={index}>
                <div className="card-body">
                  <div className="fs-5 fw-bold">{user.email}</div>
                  <div className="fs-5 fw-bold">{user.username}</div>
                  <div className="fs-6 fw-bold ">{user.phone}</div>
                  <button className="btn mt-2">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
