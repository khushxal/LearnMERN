import axios from "axios";
import { useEffect, useState } from "react";

function Queries() {
  const URL = "http://localhost:3001/api/admin";

  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(null);

  async function getAllQueries() {
    setLoading("Loading....");
    try {
      const response = await axios.get(URL + "/queries");
      if (response.data.queries.length === 0) {
        setLoading("No Queries Found");
      } else {
        setQueries(await response.data.queries);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAllQueries();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div className="text-center fs-1 text-dark fw-bold">{loading}</div>
        ) : (
          <div className="grid-container">
            {queries.map((query, index) => (
              <div className="col card w-auto" key={index}>
                <div className="card-body">
                  <div className="fs-5 fw-bold">{query.email}</div>
                  <div className="fs-6">{query.phone}</div>
                  <div className="fs-6 fw-bold ">{query.query}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Queries;
