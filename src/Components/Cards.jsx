import React from "react";
import cardimg1 from "../assets/img/card-img-1.png";

export const Cards = () => {
  return (
    <section className="cards">
      {/* <div class="cards-container"> */}
      <div className="card">
        <img src={cardimg1} alt=""></img>
        <h3 className="card-title">fish</h3>
        <button className="card-btn">Order Now</button>
      </div>
      <div className="card">
        <img src={cardimg1} alt=""></img>
        <h3 className="card-title">fish</h3>
        <button className="card-btn">Order Now</button>
      </div>
      <div className="card">
        <img src={cardimg1} alt=""></img>
        <h3 className="card-title">fish</h3>
        <button className="card-btn">Order Now</button>
      </div>
      {/* </div> */}
    </section>
  );
};
