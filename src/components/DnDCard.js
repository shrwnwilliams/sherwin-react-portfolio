import React from "react";

function DndCard(params) {
  return (
    <div className="card">
      <img className="card-img-top img-thumbnail" src={params.img} alt={params.name} />
      <div className="card-header h3">{params.name}</div>
      <div className="card-body">
      <p className="card-text">{params.info}butt stuff</p>
      </div>
    </div>
  );
}

export default DndCard;
