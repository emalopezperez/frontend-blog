import "./errors.css";
import { Link } from "react-router-dom";

const PaginaNoAcess = () => {
  return (
    <section className="container-errors">
      <h3>Error, acceso solo para usuarios admin!!!</h3>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </section>
  );
};

export default PaginaNoAcess;
