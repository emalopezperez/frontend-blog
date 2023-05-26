import React from "react";
import ReactDOM from "react-dom/client";
import AuthState from"./context/auth/authState"
import App from "./App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>
);
