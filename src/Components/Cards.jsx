import React from "react";
import cardimg1 from "../assets/img/card-img-1.png";
import cardimg2 from "../assets/img/card-img-2.png";
import cardimg3 from "../assets/img/card-img-3.png";
import { Card } from "./Card";

export const Cards = () => {
  const objCards = [
    {
      img: cardimg1,
      title: "Fish",
    },
    {
      img: cardimg2,
      title: "Fish",
    },
    {
      img: cardimg3,
      title: "Fish",
    },
  ];
  return (
    <section className="cards">
      <h1 className="section-header">Popular Meals</h1>
      <div className="row">
        {objCards.map((item, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-12">
            <Card img={item.img} title={item.title}></Card>;
          </div>
        ))}
      </div>
    </section>
  );
};
