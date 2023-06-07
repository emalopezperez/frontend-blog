/* eslint-disable react/prop-types */
import "./detail-articles.css";
import { formatDate } from "../../../helpers/formatDate";
import ReactMarkdown from "react-markdown";

const DetailArticles = ({ article, imageSrc }) => {
  const { titulo, autor, markdown, categoria, contenido, fecha } = article;

  const formattedDate = formatDate(fecha);
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

        <p className="article-date"><span>Autor: </span>{autor}</p>
      </article>
    </section>
  );
};

export default DetailArticles;
