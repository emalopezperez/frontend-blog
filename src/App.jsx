import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authContext from "./context/auth/authContext";
import Home from "./pages/home/Home";
import Articles from "./pages/articles";
import Write from "./pages/write";
import Editar from "./pages/edit-post";
import AboutMe from "./pages/about-me";
import Resources from "./pages/resources/Resources";
import Error from "./pages/error";

function App() {
  const AuthContext = useContext(authContext);
  const { admin } = AuthContext;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/recursos" element={<Resources />} />
        <Route path="/sobre-mi" element={<AboutMe />} />

        <Route path="/articles/:id" element={<Articles />} />
        <Route
          path="/editar-blog/:id"
          element={admin ? <Editar /> : <Error />}
        />
        <Route path="/escribir-blog" element={admin ? <Write /> : <Error />} />
      </Routes>
    </Router>
  );
}

export default App;
