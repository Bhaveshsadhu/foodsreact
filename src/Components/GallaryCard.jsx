import React from "react";

export const GallaryCard = ({ item }) => {
  return (
    <div className="gallary-card">
      <div className="g-card-content">
        <img className="g-img" src={item.img} alt={item.titel} />
        <h3 className="g-title">{item.titel}</h3>
        <p className="g-dec">{item.dec}</p>
      </div>
    </div>
  );
};
