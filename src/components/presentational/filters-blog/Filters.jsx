import { useContext, useEffect, useState } from "react";
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

    setSearchText("");
  };

  useEffect(() => {
    if (searchText) {
      searchPosts(searchText);
    }
  }, [searchText]);

  return (
    <nav className="container-filters">
      <section className="category">
        <button>All</button>
        <button>JavaScript</button>
        <button>CSS</button>
        <button>React</button>
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
