import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <footer className="mx-auto">
      <i className="fab fa-react"></i> Built using React.js
    </footer>
  );
}

export default Footer;
