/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import authContext from "./authContext";
import Cookies from "js-cookie";

const AuthState = ({ children }) => {
  const [token, setToken] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [registrado, setRegistrado] = useState(false);
  const [usuario, setUsuario] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [likesUser, setLikesUser] = useState([]);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    const storedAutenticado = Cookies.get("autenticado");
    const storedUsuario = Cookies.get("usuario");
    const storedAdmin = Cookies.get("administrador");

    if (storedToken) {
      setToken(storedToken);
      setAutenticado(storedAutenticado === "true");
      setAdmin(storedAdmin === "true");
      const usuarioJSON = decodeURIComponent(storedUsuario);
      const usuario = JSON.parse(usuarioJSON);

      setUsuario(usuario);

      if (storedAdmin === "true") {
        Cookies.set("administrador", true);
      } else {
        Cookies.remove("administrador");
      }
    }
  }, []);

  const login = async (data) => {
    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;

      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (responseData.usuario.roles[0].name === "admin") {
        setAdmin(true);
        Cookies.set("administrador", true);
      }

      const nombre = responseData.usuario.nombre;
      const email = responseData.usuario.email;
      const id = responseData.usuario._id;

      const user = {
        nombre: nombre,
        email: email,
        id: id,
      };

      const usuario = JSON.stringify(user);

      if (responseData.token) {
        console.log("login exitoso");
        Cookies.set("token", responseData.token);
        Cookies.set("autenticado", true);
        Cookies.set("usuario", usuario);
        setToken(responseData.token);
        setAutenticado(true);
      } else {
        Cookies.remove("token");
        Cookies.set("autenticado", false);
        Cookies.remove("usuario");
        Cookies.remove("administrador");
        setToken("");
        setAutenticado(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("usuario");
    Cookies.remove("administrador");
    Cookies.remove("autenticado");
    setUsuario(false);
    setToken("");
    setAutenticado(false);

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const singUp = async (data) => {
    const apiUrl = import.meta.env.VITE_DEPLOY_URL;
    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (responseData.token) {
        setRegistrado(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLikes = async () => {
    const userId = usuario.id;

    console.log(userId)

    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;
      let response = await fetch(`${apiUrl}/api/user/likes/${userId}`, {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      });

      response = await response.json();

      setLikesUser(response.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        token,
        autenticado,
        login,
        logout,
        singUp,
        registrado,
        usuario,
        admin,
        getUserLikes,
        likesUser
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
