import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logout from "./pages/Logout";
import Books from "./pages/Books";
import Admin from "./pages/Admin";
import Profile from "./layouts/Profile-layout";
import Users from "./layouts/Users-layout";
import Queries from "./layouts/Queries-layout";
import Book from "./layouts/Queries-layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/books" element={<Books />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<Profile />} />
            <Route path="users" element={<Users />} />
            <Route path="queries" element={<Queries />} />
            <Route path="books" element={<Book />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
