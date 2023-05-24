/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ sowModal, setSowModal, children }) => {
  const [openModal, setOpenModal] = useState(false);

  const click = () => {
    setSowModal(false);
  };
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
