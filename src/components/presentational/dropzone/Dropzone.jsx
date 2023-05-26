import { useCallback, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";

const Dropzone = () => {
  const [predefinedImageDisplayed, setPredefinedImageDisplayed] =
    useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const formData = new FormData();
      formData.append("portada", acceptedFiles[0]);

      const portada = formData.get("portada");
      const nombreArchivo = portada.name;
      const tamanoArchivo = portada.size;
      const tipoArchivo = portada.type;

      if (tamanoArchivo <= 1000000) {
        if (
          tipoArchivo == "image/jpeg" ||
          tipoArchivo == "image/png" ||
          tipoArchivo == "image/webp" ||
          tipoArchivo == "image/jpg"
        ) {
          // Mostrar imagen predefinida
          setPredefinedImageDisplayed(true);

          console.log(portada);
        } else {
          console.log("error");
        }
      } else {
        console.log("error supera los limites ");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  return (
    <form>
      <label
        htmlFor="dropzone-file"
        {...getRootProps({ className: "dropzone " })}>
        <div className="dropzone-image">
          <button>archivo</button>
          <p className="">
            <span className="font-semibold">Suelta el archivo</span>
          </p>
        </div>

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          {...getInputProps()}
        />
      </label>
    </form>
  );
};

export default Dropzone;
