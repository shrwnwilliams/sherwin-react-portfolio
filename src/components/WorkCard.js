import React from "react";

function WorkCard({ title, img, url, alt }) {
  return (
    <div>
      <p>
        <a href={url} target="blank">{title}</a>
      </p>
      <img src={img} alt={alt} className="img-fluid work-img" />
    </div>
  );
}

export default WorkCard;
