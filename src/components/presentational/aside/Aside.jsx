import "./aside.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import postsContext from "../../../context/posts/postsContext";

const Aside = () => {
  const PostsContext = useContext(postsContext);
  const { getLastPost, lastPosts } = PostsContext;

  const [lastArticle, setLastArticle] = useState({});

  useEffect(() => {
    getLastPost();
  }, []);

  useEffect(() => {
    if (lastPosts) {
      setLastArticle(lastPosts);
    }
  }, [lastPosts]);

  if (Object.keys(lastPosts).length > 0) {
    return (
      <Link to={`/articles/${lastArticle._id}`}>
        <aside className="container-sidebar">
          <div className="sidebar-item">
            <span className="">ULTIMO ARTICULO</span>
            <img
              className="img-sidebar"
              src={lastArticle.imagen}
              alt="aside blog"
            />
            <h3 className="title-aside">{lastArticle.titulo}</h3>
            <p className="">{lastArticle.contenido}</p>

            <div className="email-input-sidebar">
              <span className="">¡Suscríbete a la newsletter!</span>
              <input type="email" placeholder="Ingresa tu correo electrónico" />
              <button type="submit">Suscribite</button>
            </div>
          </div>
        </aside>
      </Link>
    );
  }
  return (
    <aside className="container-sidebar">
      <div className="sidebar-item">
        <span className="">ULTIMO ARTICULO</span>
        <img
          className="img-sidebar"
          src="https://images.unsplash.com/photo-1544121505-740398defbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=997&q=80"
          alt="aside blog"
        />
        <h3 className="title-aside">Programacion y Tecnologia</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est commodi
          expedita et repellat voluptates cupiditate, dignissimos optio maiores
          iusto accusantium enim exercitationem fuga. Facere eius veniam
          assumenda dolore pariatur enim.
        </p>

        <div className="email-input-sidebar">
          <span className="">¡Suscríbete a la newsletter!</span>
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button type="submit">Suscribite</button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
