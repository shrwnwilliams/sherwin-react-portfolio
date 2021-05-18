import React from "react";

function WorkCard({ title, img, url }) {
  return (
    <div>
      <p>
        <a href={url} target="blank">{title}</a>
      </p>
      <img src={img} className="img-fluid" />
    </div>
  );
}

export default WorkCard;
