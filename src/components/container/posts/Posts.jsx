import "./posts.css";
import Card from "../../presentational/card/Card";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import Pagination from "../../presentational/pagination/Pagination";

const Posts = () => {
  const PostsContext = useContext(postsContext);
  const { search } = PostsContext;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_DEPLOY_URL;
    const endpoint = `${apiUrl}/api/articles`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (search) {
      setPosts(search);
    } else {
      setPosts([]);
    }
  }, [search]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  if (posts.length) {
    return (
      <div className="container-posts">
        <div className="posts">
          {currentPosts.map((post) => (
            <Card post={post} key={post._id} imageSrc={post.imagen} />
          ))}
        </div>

        <div className="pagination">
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="article-no-fount">
        <h3>Articulo no encontrado...</h3>
      </div>
    );
  }
};

export default Posts;
