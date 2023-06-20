import Card from "../../presentational/card/Card";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import "./posts.css";

const Posts = () => {
  const PostsContext = useContext(postsContext);
  const { search } = PostsContext;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_DEPLOY_URL;
    const endpoint = `${apiUrl}/api/articles`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setPosts(data.items))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (search) {
      setPosts(search);
    } else {
      setPosts([]);
    }
  }, [search]);

  if (posts.length) {
    return (
      <div className="posts">
        {posts.map((post) => (
          <Card
            post={post}
            key={post._id}
            imageSrc={`${import.meta.env.VITE_DEPLOY_URL}/api/imagen/${post.imagen}`}
          />
        ))}
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
