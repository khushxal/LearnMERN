import axios from "axios";
import { useEffect, useState } from "react";
import { UseAuth } from "../auth/auth";
function Profile() {
  const URL = "http://localhost:3001/api/admin";

  const { token } = UseAuth();
  const [admin, setAdmin] = useState({});

  async function getAdminProfile() {
    try {
      const res = await axios.get(URL + "/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(await res.data.admin);
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(function () {
    getAdminProfile();
  }, []);

  return (
    <div className="container text-center fs-2">
      <div>This is Admin Profile page</div>
    </div>
  );
}

export default Profile;
