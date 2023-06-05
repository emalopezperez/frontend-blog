import Card from "../../presentational/card/Card";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import "./posts.css";

const Posts = () => {
  const PostsContext = useContext(postsContext);
  const { search } = PostsContext;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
      .then((response) => response.json())
      .then((data) => setPosts(data.items))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (search) {
      setPosts(search);
    } else {
      console.log("Post no encontrado");
    }
  }, [search]);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Card
          post={post}
          key={post._id}
          imageSrc={`http://localhost:3001/api/imagen/${post.imagen}`}
        />
      ))}
    </div>
  );
};

export default Posts;
