/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail-articles.css";
import { formatDate } from "../../../helpers/formatDate";
import ReactMarkdown from "react-markdown";

const DetailArticles = ({ article, imageSrc }) => {
  const { titulo, autor, markdown, categoria, contenido, fecha } = article;

  const formattedDate = formatDate(fecha);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container-article">
      <article>
        <img className="image-article" src={imageSrc} alt={titulo} />
        <section className="container-article-span">
          <h4>{categoria}</h4>
          <h4 className="article-date">Fecha: {formattedDate}</h4>
        </section>

        <h2 className="article-title">{titulo}</h2>
        <p className="">{contenido}</p>
        <p>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </p>

        <p className="article-date">
          <span>Autor: </span>
          {autor}
        </p>

        <Link to="/">
          <button className="button-volver">
            <span>Volver</span>
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
        </Link>
      </article>
    </section>
  );
};

export default DetailArticles;
