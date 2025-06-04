import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Tut-hub</div>
      <ul className="nav-menu">
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Explore">Explore</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <Link className="nav-contact" to="/Contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
