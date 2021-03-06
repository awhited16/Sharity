import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Login"
              className={
                window.location.pathname === "/login" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
		  <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile" || window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/donations"
              className={
                window.location.pathname === "/donations" || window.location.pathname === "/donations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Donations
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pick-ups"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Pick Ups
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;