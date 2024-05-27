import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <footer class="d-flex bottom-0 justify-content-center border-top border-bottom fw-light">
      <p class="col-md-4 text-muted text-center pt-3">
        © {new Date().getFullYear()} MERN APP, Inc
      </p>
    </footer>
  );
}

export default Footer;
