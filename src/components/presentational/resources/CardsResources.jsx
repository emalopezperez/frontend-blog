import "./resources.css";
import { Link } from "react-router-dom";

const CardsResources = ({ element }) => {
  const { imagen, titulo, categoria, link } = element;

  return (
    <Link to={link}>
      <article className="card-resources">
        <img className="img-resorces" src={imagen.url} alt="" />
        <div className="info-resources">
          <div>
            <p>{titulo}</p>
            <p>{categoria}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardsResources;
