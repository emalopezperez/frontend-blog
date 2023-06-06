/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./card.css";
import { formatDate } from "../../../helpers/formatDate";
import authContext from "../../../context/auth/authContext";
import postsContext from "../../../context/posts/postsContext";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    width: "200px",
    maxHeight: "90%",
    height: "200px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    padding: "16px",
    background: "#fff",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const Card = ({ post, imageSrc }) => {
  const AuthContext = useContext(authContext);
  const { admin } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { deletePost, postDelete } = PostsContext;

  const { contenido, titulo, autor, fecha, _id, categoria } = post;
  const formattedDate = formatDate(fecha);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = () => {
    deletePost(_id);
  };

  useEffect(() => {
    if (postDelete) {
      toast.success("Post eliminado correctamente!");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  }, [postDelete]);

  const handleModalToggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <section className="card-container">
      <Toaster position="top-right" reverseOrder={false} />
      <article>
        <h6 className="categoria">{categoria}</h6>
        <BiDotsHorizontalRounded onClick={handleModalToggle} className="dots" />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModalToggle}
          style={customStyles}
          contentLabel="Modal">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <h2>Configuración</h2>

            <span>
              {" "}
              <span>Articulo: </span>
              {titulo}
            </span>
            {admin && (
              <div className="containers-buttons-post">
                <button className="button-editar">Editar</button>
                <button onClick={handleSubmit} className="button-delete">
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </Modal>

        <h3>{titulo}</h3>
        <img src={imageSrc} alt="" />
        <p className="contenido-card">{contenido}</p>
        <p className="contenido-card">
          <span className="">Autor:</span> {autor}
        </p>
        <p className="contenido-card">
          <span>Publicado: </span>
          {formattedDate}
        </p>

        <button className="arrow-button">
          <span>Post</span>
          <svg
            viewBox="0 0 16 16"
            className="bi bi-arrow-right"
            fill="currentColor"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              fillRule="evenodd"></path>
          </svg>
        </button>
      </article>
      )
    </section>
  );
};

export default Card;
