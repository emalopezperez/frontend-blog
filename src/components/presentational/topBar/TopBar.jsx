import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./topBar.css";
import authContext from "../../../context/auth/authContext";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Modal from "../modal/Modal";
import Auth from "../auth/Auth";
import Filters from "../filters-blog/Filters";

const TopBar = () => {
  const AuthContext = useContext(authContext);
  const { autenticado, logout, usuario, admin } = AuthContext;

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

  return (
    <header className="nav-container">
      <nav className="">
        <h1>Blog</h1>

        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/recursos">Recursos</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre mi</Link>
          </li>
          <li>
            <Link to="/escribir-blog">Escribir</Link>
          </li>

          {openModalUser ? (
            <div className="modal-user">
              <p>{usuario.nombre}</p>
              <p>
                <span>{usuario.email}</span>
              </p>

              <p>
                <span>Rol: </span>
                {admin ? " Admin " : "Usuario"}
              </p>

              <button onClick={logout} className="top-list-item cerrar-sesion">
                <span>Cerrar</span>
              </button>
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

      <Modal sowModal={sowModal} setSowModal={setSowModal} className="modal">
          <Auth setSowModal={setSowModal} openModalLogin={openlogin} />
        </Modal>
    </header>
  );
};

export default TopBar;
