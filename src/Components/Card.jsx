import React from "react";

export const Card = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt={title}></img>
      <h3 className="card-title">{title}</h3>
      <button className="card-btn">Order Now</button>
    </div>
  );
};
