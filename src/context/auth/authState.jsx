/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import authContext from "./authContext";
import Cookies from "js-cookie";

const AuthState = ({ children }) => {
  const [token, setToken] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [registrado, setRegistrado] = useState(false);
  const [usuario, setUsuario] = useState(false);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    const storedAutenticado = Cookies.get("autenticado");
    const storedUsuario = Cookies.get("usuario");

    if (storedToken) {
      setToken(storedToken);
      setAutenticado(storedAutenticado === "true");
      const usuarioJSON = decodeURIComponent(storedUsuario);
      const usuario = JSON.parse(usuarioJSON);

      setUsuario(usuario);
    }
  }, []);

  const login = async (data) => {
    try {
      const apiUrl = "http://localhost:3001/api/auth";

      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      const nombre = responseData.usuario.nombre;
      const email = responseData.usuario.email;

      const user = {
        nombre: nombre,
        email: email,
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
    Cookies.remove("autenticado");
    setUsuario(false);
    setToken("");
    setAutenticado(false);
  };

  const registrarse = async (data) => {
    const apiUrl = "http://localhost:3001/api/auth";

    try {
      const response = await fetch(`${apiUrl}/signup`, {
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

  return (
    <authContext.Provider
      value={{
        token,
        autenticado,
        login,
        logout,
        registrarse,
        registrado,
        usuario,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
