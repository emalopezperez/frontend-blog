/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import authContext from "../../../context/auth/authContext";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ sowModal, setSowModal, children }) => {
  const AuthContext = useContext(authContext);
  const { autenticado } = AuthContext;

  const [openModal, setOpenModal] = useState(false);

  const click = () => {
    setSowModal(false);
  };

  useEffect(() => {
    if (autenticado) {
      setSowModal(false);
    }
  }, [autenticado]);
  
  return (
    <>
      {sowModal ? (
        <section className="modal">
          <button onClick={click} className="modal-close">
            <RiCloseLine size={20} />
          </button>

          <div className="modal-form">{children}</div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
