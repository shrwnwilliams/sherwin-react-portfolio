import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav className="nav justify-content-center">
      <ul className="nav justify-content-center mb-2">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link border-bottom border-info text-info"
                : "nav-link text-info"
            }
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/my-work"
            className={
              location.pathname === "/my-work"
                ? "nav-link border-bottom border-info text-info"
                : "nav-link text-info"
            }
          >
            My Work
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link border-bottom border-info text-info"
                : "nav-link text-info"
            }
          >
            Contact Me
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-info"
            href="https://drive.google.com/file/d/1po010mmQC0JZJWGmxIqeJZQ2g3nFksJe/view?usp=sharing"
            target="blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
