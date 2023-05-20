import { useState } from "react";
import "./topBar.css";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  const [navMobilOpen, setNavMobilOpen] = useState(false);

  const handleOnClick = () => {
    setNavMobilOpen(!navMobilOpen);
  };

  return (
    <>
      {/* desktop */}
      <nav className="top-container">
        <section className="networks-containers">
          <li className="topIcon ">
            <BsFillPersonLinesFill />
          </li>
          <li className="topIcon">
            <FaGithub />
          </li>
          <li className="topIcon ">
            <FaLinkedinIn />
          </li>
        </section>

        <ul className="top-center-list">
          <li className="">Inicio</li>
          <li className="">Nosotros</li>
          <li className="">Recursos</li>
          <li className="">Contacto</li>
          <li className="">Escribir</li>
        </ul>

        <ul className="top-right">
          <li className="top-list-item">Login</li>
          <li className="top-list-item">Registrarse</li>
        </ul>
      </nav>

      {/* Mobil */}

      <section className="top-movil">
        <h2 className="h2">blog</h2>
        <button
          className={`hamburger ${navMobilOpen ? "open" : ""}`}
          onClick={handleOnClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>

      {navMobilOpen && (
        <nav className={`top-container-mobil ${navMobilOpen ? "open" : ""}`}>
          <section className="info">
            <h2 className="h2">blog</h2>
            <button
              className={`hamburger-cruz ${navMobilOpen ? "open" : ""}`}
              onClick={() => setNavMobilOpen(!navMobilOpen)}>
              <span></span>
              <span></span>
            </button>
          </section>

          <ul className="top-center-list">
            <li className="top-list-item">Home</li>
            <li className="top-list-item">About</li>
            <li className="top-list-item">Recursos</li>
            <li className="top-list-item">Contact</li>
            <li className="top-list-item">Write</li>
          </ul>

          <ul className="top-right ">
            <li className="top-list-item nav-open">Login</li>
            <li className="top-list-item nav-open">Registrarse</li>
          </ul>

          <section className="networks-containers">
            <li className="topIcon ">
              <BsFillPersonLinesFill />
            </li>
            <li className="topIcon">
              <FaGithub />
            </li>
            <li className="topIcon ">
              <FaLinkedinIn />
            </li>
          </section>
        </nav>
      )}
    </>
  );
};

export default TopBar;
