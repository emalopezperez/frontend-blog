import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./detail-articles.css";
import AsideDetailArticles from "../aside/AsideDetailArticles";
import { formatDate } from "../../../helpers/formatDate";
import ReactMarkdown from "react-markdown";

const DetailArticles = ({ article, imageSrc }) => {
  const { titulo, autor, markdown, categoria, contenido, fecha } = article;

  const [indice, setIndice] = useState([]);

  const formattedDate = formatDate(fecha);

  useEffect(() => {
    const headings = document.querySelectorAll("h3");
    const ids = [];
    headings.forEach((heading) => {
      const id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      heading.setAttribute("id", id);
      ids.push(id);
    });
    setIndice(ids);
  }, [markdown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container">
      <section className="main">
        <section className="container-article">
          <article>
            <img className="image-article" src={imageSrc} alt={titulo} />
            <section className="container-article-span">
              <h4>{categoria}</h4>
              <h4 className="article-date">Fecha: {formattedDate}</h4>
            </section>
            <h3 className="article-title">{titulo}</h3>

            <p className="contenido">{contenido}</p>
            <div id="mi-contenedor">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>

            <p className="article-date">
              <span>Autor: </span>
              {autor}
            </p>
          </article>
        </section>
      </section>
      <aside className="aside-article-detail">
        <AsideDetailArticles indice={indice} />
      </aside>
    </main>
  );
};

export default DetailArticles;