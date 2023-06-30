import "./resources.css";
import { Link } from "react-router-dom";

const CardsResources = ({ element }) => {
  const { img, titulo, categoria, link } = element;

  return (
    <Link to={link}>
      <article className="card-resources">
        <img className="img-resorces" src={img} alt="" />
        <div className="info-resources">
          <div>
            <p>{titulo}o</p>
            <p>{categoria}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardsResources;
