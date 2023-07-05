import "./aside.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import postsContext from "../../../context/posts/postsContext";

const Aside = () => {
  const PostsContext = useContext(postsContext);
  const { getLastPost,lastPosts } = PostsContext;

  const [lastArticle, setLastArticle]= useState({})

  useEffect(() => {
    getLastPost();
  }, []);


  useEffect(()=>{
    if(lastPosts){
      setLastArticle(lastPosts)
    }
  },[lastPosts])


  return (
    <Link to={`/articles/${lastArticle._id}`}>
    <aside className="container-sidebar">
      <div className="sidebar-item">
        <span className="">ULTIMO ARTICULO</span>
        <img
          className="img-sidebar"
          src={lastArticle.imagen}
          alt=""
        />
        <h3 className="">{lastArticle.titulo}</h3>
        <p className="">
          {lastArticle.contenido}
        </p>

        <div className="email-input-sidebar">
          <span className="">¡Suscríbete a la newsletter!</span>
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button type="submit">Suscribite</button>
        </div>
      </div>
    </aside>
    </Link>
  );
};

export default Aside;
