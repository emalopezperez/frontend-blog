/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import postsContext from "./postsContext";
import authContext from "../auth/authContext";

const PostsState = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { token } = AuthContext;

  const [posts, setPosts] = useState([]);
  const [postDelete, setPostDelete] = useState(false);
  const [search, setSearch] = useState([]);
  const [categoryResources, setCategoryResources] = useState(null);
  const [lastPosts, setLastPosts] = useState({});

  const getPost = async () => {
    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;
      const endpoint = `${apiUrl}/api/articles`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data = await response.json();
      setPosts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

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
    } catch (error) {
      console.log(error);
    }
  };

  const getLastPost = () => {
    const apiUrl = import.meta.env.VITE_DEPLOY_URL;
    const endpoint = `${apiUrl}/api/articles`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.items.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        const lastPost = sortedPosts[0];

        setLastPosts(lastPost);
      })
      .catch((error) => console.log(error));
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
        setCategoryResources,
        categoryResources,
        getLastPost,
        lastPosts,
        getPost,
        posts,
        setPosts,
      }}>
      {children}
    </postsContext.Provider>
  );
};

export default PostsState;
