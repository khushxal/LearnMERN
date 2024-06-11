import axios from "axios";
import { useEffect } from "react";

function Queries() {
  const URL = "http://localhost:3001/api/admin";

  async function getAllQueries() {
    try {
      const query_data = await axios.get(URL + "/queries");
      console.log(query_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAllQueries();
  }, []);
  return <div>This is queries layout</div>;
}

export default Queries;
