import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import authContext from "../../../context/auth/authContext";
import postsContext from "../../../context/posts/postsContext";
import "./write.css";

const Write = () => {
  const AuthContext = useContext(authContext);
  const { usuario } = AuthContext;

  const PostsContext = useContext(postsContext);
  const { crearPosts } = PostsContext;

  const { nombre } = usuario;

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [file, setFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [completed, setCompleted] = useState(false);

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
    if (!titulo || !contenido || !file) {
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
          crearPosts(file, { titulo, contenido, nombre });

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

  if (completed) {
    return <Navigate to="/" />;
  }

  return (
    <section className="write">
      <Toaster position="top-right" reverseOrder={false} />
      <Toaster position="top-right" reverseOrder={false} />
      <form className="writeForm" onSubmit={handleSubmit}>
        {previewImage ? (
          <img
            className="writeImg"
            src={previewImage}
            alt="Vista previa de la imagen"
          />
        ) : (
          <div className="writeFormFile">
            <h2>Seleccionar Imagen</h2>
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus">+</i>
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
          className="writeInput"
          autoFocus={true}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          name="contenido"
          placeholder="Contenido del blog..."
          type="text"
          className="writeInput writeText"
          onChange={(e) => setContenido(e.target.value)}
        />

        <input type="submit" value="Publicar articulo" />
      </form>
    </section>
  );
};

export default Write;
