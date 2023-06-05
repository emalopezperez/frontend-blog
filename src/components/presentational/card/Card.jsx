/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./card.css";
import { formatDate } from "../../../helpers/formatDate";
import authContext from "../../../context/auth/authContext";
import postsContext from "../../../context/posts/postsContext";

const Card = ({ post, imageSrc }) => {
  const AuthContext = useContext(authContext);
  const { usuario } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { deletePost, postDelete } = PostsContext;

  const { contenido, titulo, autor, fecha, _id } = post;
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

  return (
    <section className="card-container">
      <Toaster position="top-right" reverseOrder={false} />

      <article>
        {usuario && (
          <selection className="container-butons">
            <button className="button-editar">Editar</button>
            <button onClick={handleSubmit} className="button-delete">
              Eliminar
            </button>
          </selection>
        )}

        <h3>{titulo}</h3>
        <img src={imageSrc} alt="" />
        <p>{contenido}</p>
        <p>{autor}</p>
        <p>{formattedDate}</p>
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
    </section>
  );
};

export default Card;
