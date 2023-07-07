import "./posts.css";
import Card from "../../presentational/card/Card";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import Pagination from "../../presentational/pagination/Pagination";
import Loader from "../../presentational/loader/Loader";

const Posts = () => {
  const PostsContext = useContext(postsContext);
  const { getPost, posts, setPosts, search } = PostsContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    getPost();
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
  }
  return (
    <div className="container-loader">
      <Loader />
    </div>
  );
};

export default Posts;
