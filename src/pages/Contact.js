import React from "react";

function Contact() {
  return (
    <section className="text-center">
      <h1>Contact me</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a
            className="nav-link text-info"
            href="mailto:shrwnwilliams@gmail.com"
          >
            <h3>Email</h3>
          </a>
        </li>
        <li className="list-group-item">
          <a
            className="nav-link text-info"
            href="https://github.com/shrwnwilliams"
            target="blank"
          >
            <h3>GitHub</h3>
          </a>
        </li>
        <li className="list-group-item">
          <a
            class="nav-link text-info"
            href="https://www.linkedin.com/in/sherwin-williams-08981a207/"
            target="blank"
          >
            <h3>LinkedIn</h3>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
