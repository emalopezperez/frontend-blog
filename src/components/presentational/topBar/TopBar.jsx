import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./topBar.css";
import authContext from "../../../context/auth/authContext";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Modal from "../modal/Modal";
import Auth from "../auth/Auth";

const TopBar = () => {
  const AuthContext = useContext(authContext);
  const { autenticado, logout } = AuthContext;

  const [sowModal, setSowModal] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);
  const [navMobilOpen, setNavMobilOpen] = useState(false);

  const handleOnClick = () => {
    setNavMobilOpen(!navMobilOpen);
  };

  const openModalLogin = () => {
    setOpenLogin(true);
    setSowModal(true);
  };

  const openModalRegistrarse = () => {
    setSowModal(true);
    setOpenLogin(false);
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

        <nav className="top-center-list">
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li className="">Sobre mi</li>
          <li className="">Recursos</li>
          <li className="">Contacto</li>
          <li>
            <Link to="/escribir-blog">Escribir</Link>
          </li>
        </nav>

        {autenticado ? (
          <nav className="top-right">
            <button onClick={logout} className="top-list-item ">
              logout
            </button>
            <img
              src="/public/img/icons/user.jpg"
              alt="user"
              className="icon-user"
            />
          </nav>
        ) : (
          <nav className="top-right">
            <button onClick={openModalLogin} className="top-list-item ">
              Login
            </button>
            <button onClick={openModalRegistrarse} className="top-list-item">
              Registrarse
            </button>
          </nav>
        )}
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

          <nav className="top-center-list">
            <li className="top-list-item">Home</li>
            <li className="top-list-item">About</li>
            <li className="top-list-item">Recursos</li>
            <li className="top-list-item">Contact</li>
            <li className="top-list-item">Write</li>
          </nav>

          <nav className="top-right">
            <button onClick={openModalLogin} className="top-list-item ">
              Login
            </button>
            <button onClick={openModalRegistrarse} className="top-list-item">
              Registrarse
            </button>
          </nav>

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

      <Modal sowModal={sowModal} setSowModal={setSowModal} className="modal">
        <Auth setSowModal={setSowModal} openModalLogin={openlogin} />
      </Modal>
    </>
  );
};

export default TopBar;
