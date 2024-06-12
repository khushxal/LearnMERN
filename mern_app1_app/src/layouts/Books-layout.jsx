import axios from "axios";
import img from "../image/images.jpeg";
import { UseAuth } from "../auth/auth";
import { useEffect, useState } from "react";

function Books() {
  const URL = "http://localhost:3001/api/admin/books";
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(null);
  const { token } = UseAuth();
  async function getAllBooks() {
    setLoading("Loading....");
    try {
      const response = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.books.length === 0) {
        setLoading("No Books Found");
      } else {
        setBookList(response.data.books);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="container">
      <div className="row mb-3 fs-4 fw-bold">
        {loading ? (
          <div className="text-center fs-1 text-dark">{loading}</div>
        ) : (
          <div className="grid-container">
            {bookList.map((book, index) => (
              <div className="col card" key={index}>
                <div className="card-img mt-2 text-center">
                  <img src={img} alt="Cover page" height={200} width={200} />
                </div>
                <div className="card-body">
                  <div className="fs-4 fw-bold mb-4"> {book.title}</div>
                  <div className="fs-5 fw-bolder mb-2">{book.publisher}</div>
                  <div className="fs-6 fw-bold mb-2">
                    Author : {book.authors}
                  </div>
                  <div className="fs-6 ">Published : {book.year}</div>
                </div>
                <hr />
                <div className="row text-center mb-3">
                  <div className="col">
                    <button className="btn w-50">Edit</button>
                  </div>
                  <div className="col">
                    <button className="btn w-50">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
