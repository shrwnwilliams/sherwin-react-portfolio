import React from "react";

function Nav() {
  return (
    <nav className="nav justify-content-center">
      <ul className="nav justify-content-center border-bottom border-info mb-4">
        <li className="nav-item">
          <a className="nav-link text-info" href="#about-me">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#my-work">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#contact">
            Contact Me
          </a>
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