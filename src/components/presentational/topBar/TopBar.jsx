import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./topBar.css";
import authContext from "../../../context/auth/authContext";
import Modal from "../modal/Modal";
import Auth from "../auth/Auth";
import { FaUserAstronaut } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const TopBar = () => {
  const AuthContext = useContext(authContext);
  const { autenticado, logout, usuario, admin } = AuthContext;

  const [scrollActive, setScrollActive] = useState(false);
  const [sowModal, setSowModal] = useState(false);
  const [openlogin, setOpenLogin] = useState(false);
  const [navMobilOpen, setNavMobilOpen] = useState(false);
  const [openModalUser, setOpenModalUser] = useState(false);

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

  const handleOnClickModal = () => {
    setOpenModalUser(!openModalUser);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    backgroundColor: scrollActive ? "rgba(0, 0, 0, 0.7)" : "transparent",
    color: scrollActive ? "#ffffff" : "#000000",
    transition: "background-color 0.5s ease, color 0.5s ease",
  };

  return (
    <header className="nav-container" style={containerStyle}>
      {/* Desktop*/}
      <nav className="">
        <h1 className="titulo">Blog</h1>

        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          {usuario && (
            <li>
              <Link to="/perfil-user">Perfil</Link>
            </li>
          )}
          <li>
            <Link to="/recursos">Recursos</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mi</Link>
          </li>
          <li>
            <Link to="/escribir-blog">Escribir</Link>
          </li>

          {openModalUser && (
            <div className="modal-user">
              <p>{usuario.nombre}</p>
              <p>
                <span>{usuario.email}</span>
              </p>

              <p>
                <span>Rol: </span>
                {admin ? "Admin" : "Usuario"}
              </p>

              <button onClick={logout} className="top-list-item cerrar-sesion">
                <span>Cerrar</span>
              </button>
            </div>
          )}
          {autenticado ? (
            <div className=" " onClick={handleOnClickModal}>
              <FaUserAstronaut
                onClick={handleOnClickModal}
                className="icons-user"
              />
            </div>
          ) : (
            <div className="buttons-containers-user">
              <button onClick={openModalLogin} className="button-login">
                <span>Login</span>
              </button>

              <button onClick={openModalRegistrarse}>
                <span>Registrarse</span>
              </button>
            </div>
          )}
        </ul>
      </nav>

      {/* Mobil */}
      <section className="container-movil">
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
        <nav className={` ${navMobilOpen ? "open" : ""}`}>
          <section className="info">
            <h2 className="h2">blog</h2>
            <button
              className={`hamburger-cruz ${navMobilOpen ? "open" : ""}`}
              onClick={() => setNavMobilOpen(true)}>
              <span></span>
              <span></span>
            </button>
          </section>

          {navMobilOpen && (
            <div className="modal-nav-mobil">
              {/* Contenido del modal */} hola
            </div>
          )}
        </nav>
      )}

      <Modal sowModal={sowModal} setSowModal={setSowModal} className="modal">
        <Auth setSowModal={setSowModal} openModalLogin={openlogin} />
      </Modal>
    </header>
  );
};

export default TopBar;
