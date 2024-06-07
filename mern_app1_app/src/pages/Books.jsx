import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseAuth } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function Books() {
  const navigate = useNavigate();
  const { userData } = UseAuth();

  const URL = "http://localhost:3001/api/data/books";

  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(null);

  async function getBookList() {
    setLoading("Loading....");
    try {
      const response = await axios.get(URL);
      console.log("Response data:", response.data); // Log the response data
      setBooksList(response.data.books);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getBookList();
  }, []);

  return (
    <div className="container">
      {userData ? (
        <div className="row mb-3 fs-4">
          {loading ? (
            <div>{loading}</div>
          ) : (
            <div className="grid-container">
              {booksList.map((book, index) => (
                <div className="col card" key={index}>
                  <div className="card-img text-center">
                    <img
                      src={book.imgUrl}
                      alt="Cover page"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="card-body">
                    <div className="fs-4 fw-bold mb-4"> {book.title}</div>
                    <div className="fs-5 fw-bolder mb-2">{book.publisher}</div>
                    <div className="fs-6 fw-bold mb-2">
                      Author : {book.authors}
                    </div>
                    <div className="fs-6 ">Published : {book.year}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}

export default Books;
