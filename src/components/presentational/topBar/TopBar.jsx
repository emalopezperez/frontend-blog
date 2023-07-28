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
    backgroundColor: scrollActive ? "#0f0e17" : "transparent",
    color: scrollActive ? "#ffffff" : "#000000",
    transition: "background-color 0.5s ease, color 0.5s ease",
  };

  return (
    <header className="nav-container" style={containerStyle}>
      {/* Desktop*/}
      <nav className="">
        <Link to="/">
          <h1 className="text-3xl titulo">Blog</h1>
        </Link>

        <ul>
          <li>
            <Link to="/">Articulos</Link>
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
            <div className="" onClick={handleOnClickModal}>
              <FaUserAstronaut
                onClick={handleOnClickModal}
                className="icons-user"
              />
            </div>
          ) : (
            <div className="buttons-containers-user">
              <button onClick={openModalLogin} className=" button-login">
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

      <section className="z-50 container-movil">
        <Link to="/">
          <h2
            className="text-4xl"
            style={{ color: scrollActive ? "#ffffff" : "#000000" }}>
            Blog
          </h2>
        </Link>
        <button
          className={`hamburger ${navMobilOpen ? "open" : ""}`}
          onClick={handleOnClick}>
          <span
            style={{
              backgroundColor: scrollActive ? "#ffffff" : "#000000",
            }}></span>
          <span
            style={{
              backgroundColor: scrollActive ? "#ffffff" : "#000000",
            }}></span>
          <span
            style={{
              backgroundColor: scrollActive ? "#ffffff" : "#000000",
            }}></span>
        </button>
      </section>

      {navMobilOpen && (
        <div className="absolute w-[80%] h-[70%] top-16 left-0">
          <div className="flex flex-col w-full h-[300px] bg-[#0f0e17] justify-between px-2 rounded-r-2xl pb-3">
            <div className="flex flex-col gap-5 mt-4 text-white">
              <li className="hover:bg-white hover:text-[#0f0e17] pointer p-2 rounded-sm">
                <Link to="/">Articulos</Link>
              </li>
              {usuario && (
                <li className="hover:bg-white hover:text-[#0f0e17] pointer p-2 rounded-sm">
                  <Link to="/perfil-user">Perfil</Link>
                </li>
              )}
              <li className="hover:bg-white hover:text-[#0f0e17] pointer p-2 rounded-sm">
                <Link to="/recursos">Recursos</Link>
              </li>
              <li className="hover:bg-white hover:text-[#0f0e17] pointer p-2 rounded-sm">
                <Link to="/escribir-blog">Escribir</Link>
              </li>
            </div>

            {openModalUser && (
              <div className=" modal-user">
                <p>{usuario.nombre}</p>
                <p>
                  <span>{usuario.email}</span>
                </p>

                <p>
                  <span>Rol: </span>
                  {admin ? "Admin" : "Usuario"}
                </p>

                <button
                  onClick={logout}
                  className="top-list-item cerrar-sesion">
                  <span>Cerrar</span>
                </button>
              </div>
            )}
            {autenticado ? (
              <div className="" onClick={handleOnClickModal}>
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
          </div>
        </div>
      )}

      <Modal sowModal={sowModal} setSowModal={setSowModal} className="modal">
        <Auth setSowModal={setSowModal} openModalLogin={openlogin} />
      </Modal>
    </header>
  );
};

export default TopBar;
