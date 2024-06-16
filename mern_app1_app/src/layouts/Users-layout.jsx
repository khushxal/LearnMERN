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

  async function deleteUser(id) {
    try {
      const response = await axios.delete(URL + `/users/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (await response.data.deleteUser.acknowledged) {
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUser(id) {
    try {
      navigate("/admin/edit", { state: { userId: id } });
    } catch (error) {
      console.log(error);
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
              <div className="col card w-auto border-light" key={index}>
                <div className="card-body">
                  <div className="fs-5 fw-bold">{user.email}</div>
                  <div className="fs-5 fw-bold">{user.username}</div>
                  <div className="fs-6 fw-bold ">{user.phone}</div>
                  {!user.isAdmin && (
                    <div className="row text-center">
                      <hr />
                      <div className="col">
                        <button
                          className="btn w-50"
                          onClick={() => updateUser(user._id)}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn w-50"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
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
