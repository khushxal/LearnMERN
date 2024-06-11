import axios from "axios";
import { useEffect } from "react";

function Profile() {
  const URL = "http://localhost:3001/api/admin";

  async function getAdminProfile() {
    try {
      const admin_data = await axios.get(URL + "/profile");
      console.log(admin_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAdminProfile();
  }, []);

  return <div>This is profile layout</div>;
}

export default Profile;
