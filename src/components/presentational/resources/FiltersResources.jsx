import "./resources.css";
import { useState, useEffect, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";

const FiltersResources = () => {
  const PostsContext = useContext(postsContext);
  const { setCategoryResources } = PostsContext;

  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (category) {
      setCategoryResources(category);
    }
  }, [category]);

  return (
    <nav className="container-filter-resources">
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Frontend")}>Frontendd</button>
      <button onClick={() => setCategory("Backend")}>Backend</button>
      <button onClick={() => setCategory("Libros")}>Libros</button>
    </nav>
  );
};

export default FiltersResources;
