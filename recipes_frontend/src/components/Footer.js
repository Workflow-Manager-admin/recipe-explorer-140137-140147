import React from "react";
import "./Footer.css";

/**
 * Footer component for the app.
 * PUBLIC_INTERFACE
 */
function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} Recipe Explorer &mdash; <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">About</a>
      </div>
    </footer>
  );
}

export default Footer;
