import "./resources.css";
import { Link } from "react-router-dom";
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
      <Link to="/recursos">
        <button className="btn-back">All</button>
      </Link>

      <button onClick={() => setCategory("Frontend")}>Frontendd</button>
      <button onClick={() => setCategory("Backend")}>Backend</button>
    </nav>
  );
};

export default FiltersResources;
