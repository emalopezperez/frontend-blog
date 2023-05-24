import Card from "../../presentational/card/Card";
import { useEffect, useState } from "react";
import "./posts.css"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
      .then((response) => response.json())
      .then((data) => setPosts(data.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Card post={post} key={post._id} imageSrc={`http://localhost:3001/api/imagen/${post.imagen}`} />
      ))}
    </div>
  );
};

export default Posts;
