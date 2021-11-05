import React from "react";

function DndCard({name, img, id, story, egg}) {
  return (
    <div className="card">
      <img className="card-img-top img-thumbnail" src={img} alt={name} />
      <div className="card-header h3">{name}</div>
      <div className="card-body">{story}</div>
    </div>
  );
}

export default DndCard;
