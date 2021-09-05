import React from "react";

function DndCard({ id, name, img, img2, info }) {
  return (
    <div className="card">
      <div className="card-header h3">{name}</div>
      <img className="card-img-top img-thumbnail" src={img} alt={name} />
    </div>
  );
}

export default DndCard;
