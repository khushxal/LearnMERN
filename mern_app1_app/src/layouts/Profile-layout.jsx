import axios from "axios";
import { useEffect } from "react";
import { UseAuth } from "../auth/auth";
import { toast } from "react-toastify";
function Profile() {
  const URL = "http://localhost:3001/api/admin";

  const { token } = UseAuth();

  async function getAdminProfile() {
    try {
      const admin_data = await axios.get(URL + "/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("This is admin Data", admin_data);
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(function () {
    getAdminProfile();
  }, []);

  return <div>This is profile layout</div>;
}

export default Profile;
