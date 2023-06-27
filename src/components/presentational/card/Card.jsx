/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
    
  },
};

Modal.setAppElement("#root");

const Card = ({ post, imageSrc }) => {
  const AuthContext = useContext(authContext);
  const { admin } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { deletePost, postDelete } = PostsContext;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { contenido, titulo, fecha, _id, categoria } = post;
  const formattedDate = formatDate(fecha);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="card-container">
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
            alingItems: "center",
          }}>
          <>
            <p>Esta seguro que desea elminar el articulo {titulo}?</p>

            <div className="butons-modals-delete">
              <button onClick={handleSubmit} className="">
                Eliminar
              </button>
            </div>
          </>
        </div>
      </Modal>

      {admin && (
        <div className="containers-buttons-post">
          <Link to={`/editar-blog/${_id}`}>
            <button className="button-editar">Editar</button>
          </Link>
          <button onClick={handleModalToggle} className="button-delete">
            Eliminar
          </button>
        </div>
      )}

      <Toaster position="top-right" reverseOrder={false} />
      <Link to={`/articles/${_id}`}>
        <article>
          <h6 className="categoria">{categoria}</h6>
          <img src={imageSrc} alt="blog" />
          <p className="contenido-card">
            <span className="date">Emanuel Lopez. {formattedDate}</span>
          </p>
          <h3>{titulo}</h3>
          <p className="contenido-card">{contenido}</p>
        </article>
      </Link>
    </section>
  );
};

export default Card;
