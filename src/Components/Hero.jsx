import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [icons, setIcons] = useState([
    "fas fa-egg",
    "fas fa-stroopwafel",
    "fas fa-cheese",
    "fas fa-hotdog",
    "fas fa-drumstick-bite",
    "fas fa-apple-alt",
    "fas fa-ice-cream",
    "fas fa-fish",
    "fas fa-cookie",
    "fas fa-seedling",
  ]);

  const [visibleIndex, setVisibleIndex] = useState(0); // Track which icon to show

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % icons.length); // Move to next icon
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [icons.length]);

  return (
    <section className="section-1">
      <h1 className="section-header">Variety of Foods</h1>
      <div className="section-1-icons">
        {icons.map((icon, i) => (
          <i
            key={i}
            className={`${icon} ${i === visibleIndex ? "show" : "hide"}`}
          ></i>
        ))}
      </div>
    </section>
  );
};
