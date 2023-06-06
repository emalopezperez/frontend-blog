/* eslint-disable react/prop-types */
import "./detail-articles.css";
import { formatDate } from "../../../helpers/formatDate";
import ReactMarkdown from "react-markdown";

const DetailArticles = ({ article, imageSrc }) => {
  const { titulo, autor, markdown, categoria, contenido, fecha } = article;

  const formattedDate = formatDate(fecha);
  return (
    <main className="container-article">
      <article>
        <img className="image-article" src={imageSrc} alt={titulo} />
        <p>{categoria}</p>
        <h2>{titulo}</h2>
        <p>{contenido}</p>
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <span>Fecha: {formattedDate}</span>
        <p>{autor}</p>
      </article>
    </main>
  );
};

export default DetailArticles;
