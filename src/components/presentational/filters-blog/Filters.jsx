import { useContext, useState, useEffect } from "react";
import postsContext from "../../../context/posts/postsContext";
import "./filters.css";

const Filters = () => {
  const PostsContext = useContext(postsContext);
  const { searchPosts } = PostsContext;

  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    searchPosts(searchText);

    setSearchText("");
  };

  useEffect(() => {
    if (filter) {
      searchPosts(filter);
    }
  }, [filter]);

  return (
    <nav className="container-filters">
      <section className="category">
        <button>All</button>
        <button onClick={() => setFilter("Javascript")}>JavaScript</button>
        <button onClick={() => setFilter("css")}>CSS</button>
        <button onClick={() => setFilter("react")}>React</button>
      </section>

      <div className="search-container">
        <input
          type="search"
          placeholder="Buscar articulo..."
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>Buscar</button>
      </div>

      <div className="nada"></div>
    </nav>
  );
};

export default Filters;
