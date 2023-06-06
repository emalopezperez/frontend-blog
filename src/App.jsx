import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authContext from "./context/auth/authContext";
import Home from "./pages/home";
import Articles from "./pages/articles";
import Error from "./pages/error";
import Escribir from "./pages/escribir";

function App() {
  const AuthContext = useContext(authContext);
  const { admin } = AuthContext;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route
          path="/escribir-blog"
          element={admin ? <Escribir /> : <Error />}
        />
      </Routes>
    </Router>
  );
}

export default App;
