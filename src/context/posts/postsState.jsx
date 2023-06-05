/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import postsContext from "./postsContext";
import authContext from "../auth/authContext";

const PostsState = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const [postDelete, setPostDelete] = useState(false);

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

  const deletePost = async (id) => {
    try {
      const apiUrl = "http://localhost:3001/api";

      let response = await fetch(`${apiUrl}/article/${id}`, {
        method: "DELETE",
        headers: {
          "x-access-token": token,
        },
      });

      response = await response.json();
      console.log(response)

      setPostDelete(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <postsContext.Provider
      value={{
        crearPosts,
        deletePost,
        postDelete,
      }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsState;
