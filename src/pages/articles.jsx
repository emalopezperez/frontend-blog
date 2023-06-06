import TopBar from "../components/presentational/topBar/TopBar";
import ArticlesContainer from "../components/container/articles/ArticlesContainer";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { id } = useParams();

  return (
    <>
      <TopBar />
      <ArticlesContainer id={id} />
    </>
  );
};

export default Articles;
