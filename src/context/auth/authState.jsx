/* eslint-disable react/prop-types */
import authContext from "./authContext";

const AuthState = ({ children }) => {
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
        console.log("login existoso");

        localStorage.setItem("token", responseData.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        login,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
