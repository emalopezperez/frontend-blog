import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import "./detail-articles.css";
import AsideDetailArticles from "../aside/AsideDetailArticles";
import { formatDate } from "../../../helpers/formatDate";
import { Element as ScrollElement } from "react-scroll";

const DetailArticles = ({ article, imageSrc }) => {
  const { titulo, autor, markdown, categoria, contenido, fecha } = article;

  const [indice, setIndice] = useState([]);
  const [content, setContent] = useState("");

  const formattedDate = formatDate(fecha);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = document.createElement("div");
    container.innerHTML = markdown;

    const headings = container.querySelectorAll("h1, h2, h3");
    const encabezados = [];
    headings.forEach((heading) => {
      const headingText = heading.textContent.trim();
      const id = headingText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/-+$/, "");
      heading.setAttribute("id", id);

      encabezados.push(id);
    });

    setContent(container.innerHTML);
    setIndice(encabezados);
  }, [markdown]);

  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.value = content;
    }
  }, [content]);

  const config = {
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: [],
    readonly: true,
    width: "100%",
    height: "100%",
    resizable: false,
    allowResizeX: false,
    allowResizeY: false,
    style: {
      overflow: "hidden",
      border: "none !important",
    },
    charset: "UTF-8",
  };

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
            <ScrollElement name="main-content">
              <p className="contenido">{contenido}</p>

              <div id="mi-contenedor">
                <JoditEditor ref={editorRef} config={config} value={content} readOnly={true} />
              </div>
            </ScrollElement>
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
