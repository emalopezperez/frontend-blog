import Container from "../components/presentational/containers/Container";
import TopBar from "../components/presentational/topBar/TopBar";
import ArticlesContainer from "../components/container/articles/ArticlesContainer";
import Aside from "../components/presentational/aside/Aside";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { id } = useParams();
  return (
    <div>
      <TopBar />
      <main className="">
        <Container
          contentComponent={<ArticlesContainer id={id} />}
          asideComponent={<Aside />}
        />
      </main>
    </div>
  );
};

export default Articles;
