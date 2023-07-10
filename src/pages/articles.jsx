import ArticlesContainer from "../components/container/articles/ArticlesContainer";

import { useParams } from "react-router-dom";

const Articles = () => {
  const { id } = useParams();
  return (
    <div>
      <main className="">
        <ArticlesContainer id={id} />
      </main>
    </div>
  );
};

export default Articles;
