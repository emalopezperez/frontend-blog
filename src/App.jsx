import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authContext from "./context/auth/authContext";
import Home from "./pages/home";
import Error from "./pages/error";
import Escribir from "./pages/escribir";

function App() {
  const AuthContext = useContext(authContext);
  const { autenticado } = AuthContext;

  console.log(autenticado);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escribir-blog" element={autenticado ? <Escribir /> : <Error />} />

      </Routes>
    </Router>
  );
}

export default App;
