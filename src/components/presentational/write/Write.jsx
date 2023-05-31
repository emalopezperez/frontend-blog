import "./write.css";
import { useState } from "react";

const Write = () => {
  const [file, setFile] = useState(false);

  

  return (
    <section className="write">
      <form className="writeForm">
        {file ? (
          <img
            className="writeImg"
            src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        ) : (
          <div className="writeFormFile">
            <h2>Seleccionar Imagen</h2>
            <input type="file" id="fileInput"  />
          </div>
        )}

        <input
          type="text"
          placeholder="Titulo"
          className="writeInput"
          autoFocus={true}
        />
        <textarea
          placeholder="Contenido del blog..."
          type="text"
          className="writeInput writeText"></textarea>

        <input type="submit" value="Publish" />
      </form>
    </section>
  );
};

export default Write;
