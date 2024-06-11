import axios from "axios";
import img from "../image/images.jpeg";
import { useEffect, useState } from "react";

function Books() {
  const URL = "http://localhost:3001/api/admin/books";

  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(null);

  async function getAllBooks() {
    setLoading("Loading....");
    try {
      const response = await axios.get(URL);
      setBookList(response.data.books);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="container">
      <div className="row mb-3 fs-4">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
