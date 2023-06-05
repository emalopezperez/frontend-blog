import { useContext, useEffect, useState } from "react";
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
      <section className="container-category">
        <button onClick={() => setFilter("Javascript")} className="filter-all">
          <span>All</span>
        </button>
        <button onClick={() => setFilter("Javascript")}>
          <span>Javascript</span>
        </button>
        <button onClick={() => setFilter("css")}>
          <span>CSS</span>
        </button>
        <button onClick={() => setFilter("react")}>
          <span>React</span>
        </button>
        <button onClick={() => setFilter("next")}>
          <span>Next</span>
        </button>
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
    </nav>
  );
};

export default Filters;
