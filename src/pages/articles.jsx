import ArticlesContainer from "../components/container/articles/ArticlesContainer";

import { useParams } from "react-router-dom";

const Articles = () => {
  const { id } = useParams();
  return (
    <div>
      <ArticlesContainer id={id} />
    </div>
  );
};

export default Articles;
