import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import "./detail-articles.css";
import AsideDetailArticles from "../aside/AsideDetailArticles";
import { formatDate } from "../../../helpers/formatDate";
import { Element as ScrollElement } from "react-scroll";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

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
    <main className="container-article ">
      <button
        className="flex items-center justify-center w-full p-2 mt-8 text-white bg-black md:hidden "
        onClick={handleModalToggle}>
        <span className="flex items-center justify-center gap-1">
          <span>Indice</span>
          <span>
            {modalAside ? <VscChevronDown /> : <VscChevronRight />}
          </span>{" "}
        </span>
      </button>
      {modalAside && (
        <div className="text-white bg-black">
          <AsideDetailArticles indice={indice} />
        </div>
      )}

      <div className="w-[5%] hidden md:flex "></div>
      <article className="article-info">
        <header>
          <h2>{titulo}</h2>
        </header>

        <div className="flex justify-between w-full text-[12px]">
          <span>{categoria}</span>
          <span>{formatDate(fecha)}</span>
        </div>
        <JoditEditor
          ref={editorRef}
          config={config}
          value={content}
          readOnly={true}
          className="jodit"
        />

        <p className="pt-3 pb-3">
          Autor:
          <span> {autor}</span>
        </p>
      </article>

      <aside className="hidden md:flex aside-article">
        <AsideDetailArticles indice={indice} />
      </aside>
    </main>
  );
};

export default DetailArticles;
