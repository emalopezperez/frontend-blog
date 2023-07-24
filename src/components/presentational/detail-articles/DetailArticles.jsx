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
  const [modalAside, setModalAside] = useState(false);

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
    resizable: false,
    allowResizeX: false,
    allowResizeY: false,
    style: {
      border: "none !important",
    },
    charset: "UTF-8",
    autoresize: true,
  };

  const handleModalToggle = () => {
    setModalAside(!modalAside);
  };

  return (
    <main className="container-article-detail ">
      <section id="main-content" className="main-article-detail">
        <img className="image-article w-full md:w-[70%]" src={imageSrc} alt={titulo} />
        <section className="container-article-span w-full md:w-[70%]">
          <h4>{categoria}</h4>
          <h4 className="article-date">Fecha: {formattedDate}</h4>
        </section>
        <h3 className="article-title">{titulo}</h3>
        <p className="contenido">{contenido}</p>

        <JoditEditor
          ref={editorRef}
          config={config}
          value={content}
          readOnly={true}
        />

        <p className="article-date">
          <span>Autor: </span>
          {autor}
        </p>
      </section>

      <aside className="aside-detail-articles hidden md:flex">
        <AsideDetailArticles indice={indice}/>
      </aside>

      <button onClick={handleModalToggle} className="absolute right-8 text-white font-bold">Indice</button>

      {
        modalAside && <aside className="aside-detail-articles bg-black w-full  text-white z-40 fixed top-16 right-0">
          <button onClick={handleModalToggle} className="fixed right-4">X</button>
        <AsideDetailArticles indice={indice}/>
      </aside>
      }
    </main>
  );
};

export default DetailArticles;
