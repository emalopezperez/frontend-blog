import { useContext, useState } from "react";
import postsContext from "../../../context/posts/postsContext";
import "./filters.css";

const Filters = () => {
  const PostsContext = useContext(postsContext);
  const { searchPosts } = PostsContext;

  const [searchText, setSearchText] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchButtonClick = () => {
    searchPosts(searchText);
  };

  return (
    <nav className="container-filters">
      <section className="container-category">
        <button className="filter-all">
          <span>All</span>
        </button>
        <button>
          <span>Javascript</span>
        </button>
        <button>
          <span>CSS</span>
        </button>
        <button>
          <span>React</span>
        </button>
        <button>
          <span>Next</span>
        </button>
        <button>
          <span>Node</span>
        </button>
      </section>
      <div className="search-container">
        <input
          type="search"
          placeholder="Buscar post..."
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>Buscar</button>
      </div>
    </nav>
  );
};

export default Filters;
