/* eslint-disable react/prop-types */
import "./sliders.css";

const CardProyect = ({ card }) => {
  const { title, description, image } = card;

  return (
    <div className="card-info">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CardProyect;
