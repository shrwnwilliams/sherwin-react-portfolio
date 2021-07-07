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
            to="/my-portfolio"
            className={
              location.pathname === "/my-portfolio"
                ? "nav-link border-bottom border-info text-info"
                : "nav-link text-info"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-info"
            href="https://drive.google.com/file/d/1-Vb5so_5KrC_fE990X08zhSHkIvMREw7/view?usp=sharing"
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
