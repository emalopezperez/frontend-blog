/* eslint-disable react/prop-types */
import "./card.css";
import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete as IconDelete } from "react-icons/md";
import { AiFillEdit, AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
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
    padding: "16px ",
    background: "#fff",
  },
};

Modal.setAppElement("#root");

const Card = ({ post, imageSrc }) => {
  const AuthContext = useContext(authContext);
  const { admin, usuario } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { deletePost, postDelete, search, likesArticlesUser } = PostsContext;

  const { contenido, titulo, fecha, _id, categoria } = post;
  const formattedDate = formatDate(fecha);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLiked, setLiked] = useState(false);

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
    if (!search.length) {
      window.scrollTo(0, 0);
    }
  }, [search]);

  const like = async () => {
    likesArticlesUser(_id);
    toast.success("Post guardado correctamente!");

    setModalIsOpen(false);
    setLiked(true);
  };


  
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
          <div className="container-modal-buttons">
            <div className="buttons">
              <Link to={`/editar-blog/${_id}`}>
                <div className="">
                  <AiFillEdit className="icons-buttons-modal icon-edit" />
                </div>
              </Link>
              <span>Editar articulo</span>
            </div>
            <div className="buttons">
              <div onClick={handleSubmit} className="">
                <IconDelete className="icons-buttons-modal icon-delete" />
              </div>
              <span>Eliminar articulo</span>
            </div>

            <div className="buttons">
              <div onClick={like} className="container-button-like">
                <label className="ui-bookmark">
                  <input type="checkbox" />
                  <div className="bookmark">
                    <svg viewBox="0 0 32 32">
                      <g>
                        <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                      </g>
                    </svg>
                  </div>
                </label>
              </div>
              <span>Guardar articulo</span>
            </div>

            <div className="buttons">
              <div className="">
                <AiOutlineLink className="icons-buttons-modal" />
              </div>
              <span>Copiar enlace </span>
            </div>
          </div>
        </div>
      </Modal>

      {admin && (
        <button onClick={handleModalToggle} className="containers-three-dots ">
          <span>
            <BsThreeDots className=" dots" />
          </span>
        </button>
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
          <p className="contenido-card first">{contenido}</p>
        </article>
      </Link>
    </section>
  );
};

export default Card;
