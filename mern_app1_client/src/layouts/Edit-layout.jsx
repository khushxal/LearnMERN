import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/auth.jsx";
import axios from "axios";
import { toast } from "react-toastify";

function Edituser() {
  const { token } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_SERVER_API + "/api/admin";
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    phone: "",
  });

  async function getUserById() {
    try {
      const userId = location.state.userId;
      const res = await axios.get(URL + `/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserDetails({
        email: await res.data.userDetails.email,
        username: await res.data.userDetails.username,
        phone: await res.data.userDetails.phone,
      });
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    if (location.state !== null) {
      getUserById();
    } else {
      toast.error("Access Denide. User is not a valid admin.");
      navigate("/logout");
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetails((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  async function handleSubmit(e) {
    const userId = location.state.userId;
    e.preventDefault();
    try {
      const res = await axios.put(URL + `/user/${userId}`, userDetails, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.msg) {
        toast.success(res.data.msg);
        navigate("/admin/users");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="fs-2">Edit Details</div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="p-4  p-md-5 border rounded-3 bg-light fw-light"
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
            value={userDetails.email}
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
            value={userDetails.username}
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
            value={userDetails.phone}
          />
          <label htmlFor="floatingInput">Phone</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn">
            Save and Exit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edituser;
