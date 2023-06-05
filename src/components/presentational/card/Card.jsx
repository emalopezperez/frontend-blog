/* eslint-disable react/prop-types */
import "./card.css";
import {formatDate} from "../../../helpers/formatDate"

const Card = ({ post, imageSrc }) => {
  const { contenido, titulo, autor, fecha } = post;
  const formattedDate = formatDate(fecha); 

  return (
    <section className="card-container">
      <article>
        <h3>{titulo}</h3>
        <img src={imageSrc} alt="" />
        <p>{contenido}</p>
        <p>{autor}</p>
        <p>{formattedDate}</p> 
        <button className="button2">Leer más...</button>
      </article>
    </section>
  );
};

export default Card;
