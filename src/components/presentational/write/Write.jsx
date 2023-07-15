import { useState, useContext, useRef, useMemo } from "react";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import authContext from "../../../context/auth/authContext";
import postsContext from "../../../context/posts/postsContext";
import "./write.css";

import JoditEditor from "jodit-react";

const Write = ({ placeholder }) => {
  const AuthContext = useContext(authContext);
  const { usuario } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { crearPosts } = PostsContext;

  const { nombre } = usuario;

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [categoria, setCategoria] = useState("");
  const [file, setFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [completed, setCompleted] = useState(false);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 300,
    language: "es",
    placeholder: "Contenido del blog",
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !contenido || !file || !categoria) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (file) {
      const tamanoArchivo = file.size;
      const tipoArchivo = file.type;

      if (tamanoArchivo <= 1000000) {
        if (
          tipoArchivo === "image/jpeg" ||
          tipoArchivo === "image/png" ||
          tipoArchivo === "image/webp" ||
          tipoArchivo === "image/jpg"
        ) {
          const markdown = content
          crearPosts(file, { titulo, contenido, nombre, markdown, categoria });

          toast.success("Post subido correctamente!");

          setTimeout(() => {
            setCompleted(true);
          }, 1200);
        } else {
          toast.error("Formato del archivo no aceptado");
        }
      } else {
        toast.error("Su imagen supera los límites");
      }
    }
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  if (completed) {
    return <Navigate to="/" />;
  }

  return (
    <section className="write">
      <Toaster position="top-right" reverseOrder={false} />
      <Toaster position="top-right" reverseOrder={false} />
      <form className="writeForm" onSubmit={handleSubmit}>
        <section className="title-select">
          {previewImage ? (
            <img
              className="writeImg"
              src={previewImage}
              alt="Vista previa de la imagen"
            />
          ) : (
            <div className="">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <input
                name="file"
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          )}

          <input
            type="text"
            name="titulo"
            placeholder="Titulo"
            className="writeInput input-title"
            autoFocus={true}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <select
            className=""
            value={categoria}
            onChange={handleCategoriaChange}>
            <option value="" disabled>
              Categoría
            </option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="React">React</option>
            <option value="Next">Next</option>
          </select>
        </section>

        <textarea
          name="contenido"
          placeholder="Descripcion del blog..."
          type="text"
          className="writeInput writeText descripcion"
          onChange={(e) => setContenido(e.target.value)}
        />
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} 
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />

        <input type="submit" value="Publicar articulo" />
      </form>
    </section>
  );
};

export default Write;
