/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import authContext from "../../../context/auth/authContext";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ sowModal, setSowModal, children }) => {
  const AuthContext = useContext(authContext);
  const { autenticado, registrado } = AuthContext;

  const [openModal, setOpenModal] = useState(false);

  const click = () => {
    setSowModal(false);
  };

  useEffect(() => {
    if (autenticado || registrado) {
      setSowModal(false);
    }
  }, [autenticado, registrado]);

  return (
    <>
      {sowModal ? (
        <section className="modal">
          <button onClick={click} className="bg-white rounded-[100%] w-6 absolute top-10 left-20  ">
            <span className="text-black ">
              X
            </span>
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
