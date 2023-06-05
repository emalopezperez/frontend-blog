/* eslint-disable react/prop-types */
import { useContext } from "react";
import postsContext from "./postsContext";
import authContext from "../auth/authContext";

const PostsState = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const crearPosts = async (file, data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("contenido", data.contenido);
    formData.append("autor", data.nombre);
    formData.append("imagen", file);
    try {
      const apiUrl = "http://localhost:3001/api";

      let response = await fetch(`${apiUrl}/create`, {
        method: "POST",
        headers: {
          "x-access-token": token,
        },
        body: formData,
      });

      response = await response.json();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <postsContext.Provider
      value={{
        crearPosts,
      }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsState;
