/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import postsContext from "./postsContext";
import authContext from "../auth/authContext";

const PostsState = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const [postDelete, setPostDelete] = useState(false);
  const [search, setSearch] = useState([]);

  const crearPosts = async (file, data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("contenido", data.contenido);
    formData.append("markdown", data.markdown);
    formData.append("autor", data.nombre);
    formData.append("categoria", data.categoria);
    formData.append("imagen", file);

    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;
      let response = await fetch(`${apiUrl}/api/create`, {
        method: "POST",
        headers: {
          "x-access-token": token,
        },
        body: formData,
      });

      response = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;

      let response = await fetch(`${apiUrl}/api/article/${id}`, {
        method: "DELETE",
        headers: {
          "x-access-token": token,
        },
      });

      response = await response.json();
      console.log(response);

      setPostDelete(true);
    } catch (error) {
      console.log(error);
    }
  };

  const searchPosts = async (value) => {
    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;

      let response = await fetch(`${apiUrl}/api/buscar/${value}`, {
        method: "GET",
      });

      response = await response.json();

      setSearch(response.articulo);
    } catch (error) {
      console.log(error);
      setSearch([]);
    }
  };

  const updatePost = async (file, id, data) => {
    const formData = new FormData();
    formData.append("titulo", data.titulo);
    formData.append("contenido", data.contenido);
    formData.append("markdown", data.markdown);
    formData.append("autor", data.nombre);
    formData.append("categoria", data.categoria);
    formData.append("imagen", file);

    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;
      let response = await fetch(`${apiUrl}/api/article/${id}`, {
        method: "PUT",
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
        deletePost,
        postDelete,
        searchPosts,
        search,
        updatePost,
      }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsState;
