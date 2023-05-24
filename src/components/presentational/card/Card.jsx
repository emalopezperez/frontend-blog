/* eslint-disable react/prop-types */
import "./card.css";

const Card = ({ post, imageSrc }) => {
  const { contenido, titulo } = post;

  return (
    <section className="card-container">
      <article>
        <h3>{titulo}</h3>
        <img src={imageSrc} alt="" />
        <p>{contenido}</p>
        <button>Ver mas</button>
      </article>
    </section>
  );
};

export default Card;
