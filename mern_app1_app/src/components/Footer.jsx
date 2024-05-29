import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <footer className="d-flex bottom-0 justify-content-center border-top border-bottom fw-light">
      <p className="col-md-4 text-muted text-center pt-3">
        © {new Date().getFullYear()} MERN APP, Inc
      </p>
    </footer>
  );
}

export default Footer;
