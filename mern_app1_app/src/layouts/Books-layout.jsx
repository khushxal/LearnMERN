import axios from "axios";
import { useEffect } from "react";

function Books() {
  const URL = "http://localhost:3001/api/admin";

  async function getAllBooks() {
    try {
      const books_data = await axios.get(URL + "/books");
      console.log(books_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAllBooks();
  }, []);

  return <div>This is books layout</div>;
}

export default Books;
