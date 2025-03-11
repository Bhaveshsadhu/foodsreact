import React from "react";
import g1 from "../assets/img/gallery-img-1.jpg";
import g2 from "../assets/img/gallery-img-2.jpg";
import g3 from "../assets/img/gallery-img-3.jpg";
import g4 from "../assets/img/gallery-img-4.jpg";
import g5 from "../assets/img/gallery-img-5.jpg";
import g6 from "../assets/img/gallery-img-6.jpg";
import { GallaryCard } from "./GallaryCard";

export const Galllary = () => {
  const objGallary = [
    {
      img: g1,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: g2,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: g3,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      img: g4,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: g5,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: g6,
      titel: "PANCACKE",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
      <section className="gallary">
        <h1 className="section-header">Gallary</h1>
        <div className="row mt-5">
          {objGallary.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <GallaryCard item={item}></GallaryCard>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
