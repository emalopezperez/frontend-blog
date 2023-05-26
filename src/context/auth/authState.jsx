/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import authContext from "./authContext";
import Cookies from "js-cookie";

const AuthState = ({ children }) => {
  const [token, setToken] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    const storedAutenticado = Cookies.get("autenticado");

    if (storedToken) {
      setToken(storedToken);
      setAutenticado(storedAutenticado === "true");
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

      if (responseData.token) {
        console.log("login exitoso");
        Cookies.set("token", responseData.token);
        Cookies.set("autenticado", true);
        setToken(responseData.token);
        setAutenticado(true);
      } else {
        Cookies.remove("token");
        Cookies.set("autenticado", false);
        setToken("");
        setAutenticado(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("autenticado");
    setToken("");
    setAutenticado(false);
  };

  return (
    <authContext.Provider
      value={{
        token,
        autenticado,
        login,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
