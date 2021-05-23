import React from "react";

function Project({ title, img, url, alt }) {
  return (
    <div>
      <p>
        <a href={url} target="blank" className="text-info nav-link">
          <h3>{title}</h3>
          <br />
          <img src={img} alt={alt} className="img-fluid work-img" />
        </a>
      </p>
    </div>
  );
}

export default Project;
