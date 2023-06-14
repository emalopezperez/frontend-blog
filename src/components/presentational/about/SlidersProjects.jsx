import { useState } from "react";
import CardProyect from "./CardProyect";

const cards = [
  {
    id: 1,
    name: "JavaScript",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 1",
  },
  {
    id: 2,
    name: "Python",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 2",
  },
  {
    id: 3,
    name: "Producto 3",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 3",
  },
  {
    id: 4,
    name: "Producto 4",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 4",
  },
  {
    id: 5,
    name: "Producto 5",
    image: "https://via.placeholder.com/400",
    description: "Descripción del producto 5",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SlidersProjects = () => {
  

  return (
    <div className="slider-container">
      <div className="slider" >
        {cards.map((card, index) => (
          <div key={index} className="card-info">
            <CardProyect card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidersProjects;
