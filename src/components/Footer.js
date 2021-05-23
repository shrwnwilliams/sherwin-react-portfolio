import React from 'react';

function Footer() {
    return (
        <footer className="border-top border-info container mt-5">
        <h4 className="text-center my-3">Contact Me</h4>
        <nav id="nav-bar" className="nav justify-content-center">
          <ul className="nav justify-content-between mb-4">
            <li className="nav-item">
              <a
                className="nav-link text-info contact"
                href="mailto:shrwnwilliams@gmail.com"
                >Email</a
              >
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-info contact"
                href="https://github.com/shrwnwilliams"
                target="blank"
                >GitHub</a
              >
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-info contact"
                href="https://www.linkedin.com/in/sherwin-williams-08981a207/"
                target="blank"
                >LinkedIn</a
              >
            </li>
          </ul>
        </nav>
      </footer>
    );
}

export default Footer;