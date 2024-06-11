import axios from "axios";
import { useEffect } from "react";

function Users() {
  const URL = "http://localhost:3001/api/admin";

  async function getAllUsers() {
    try {
      const user_data = await axios.get(URL + "/users");
      console.log(user_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAllUsers();
  }, []);

  return <div>This is users layout</div>;
}

export default Users;
