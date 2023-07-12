/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./cards-profile.css";
import Modal from "react-modal";
import { useContext, useEffect, useState } from "react";
import authContext from "../../../context/auth/authContext";
import postsContext from "../../../context/posts/postsContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { formatDate } from "../../../helpers/formatDate";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete as IconDelete } from "react-icons/md";
import { AiFillEdit, AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

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

const CardProfile = ({ post, imageSrc }) => {
  const AuthContext = useContext(authContext);
  const { usuario } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { search, deslikeArticlesUser, setLiked, isLiked } = PostsContext;

  const { contenido, titulo, fecha, _id, categoria } = post;
  const formattedDate = formatDate(fecha);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!search.length) {
      window.scrollTo(0, 0);
    }
  }, [search]);

  const handleModalToggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const deslike = async () => {
    try {
      await deslikeArticlesUser(_id);
      setLiked(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLiked) {
      toast.success("Se eliminó el artículo guardado en tu perfil");
      setModalIsOpen(false)
      
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
  }, [isLiked]);

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
              <div onClick={deslike} className="container-button-like">
                <label className="ui-bookmark">
                  <input type="checkbox" />
                  <div className="bookmark bookmark-perfil">
                    <svg viewBox="0 0 32 32">
                      <g>
                        <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                      </g>
                    </svg>
                  </div>
                </label>
              </div>
              <span>Eliminar articulo guardado</span>
            </div>

            <div className="buttons">
              <div  className="">
                <AiOutlineLink className="icons-buttons-modal" />
              </div>
              <span>Copiar enlace del articulo </span>
            </div>
          </div>
        </div>
      </Modal>

      <button onClick={handleModalToggle} className="containers-three-dots ">
        <span>
          <BsThreeDots className=" dots" />
        </span>
      </button>

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

export default CardProfile;
