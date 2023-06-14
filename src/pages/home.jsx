import Header from "../components/presentational/header/Header";
import TopBar from "../components/presentational/topBar/TopBar";
import ContainerHome from "../components/presentational/containers/Container-home";
import Filters from "../components/presentational/filters-blog/Filters";
import Posts from "../components/container/posts/Posts";
import Aside from "../components/presentational/aside/Aside";

const Home = () => {
  return (
    <main className="container-home">
      <TopBar />
      <Header />
      <ContainerHome
        headerComponent={<Filters/>}
        contentComponent={<Posts/>}
        asideComponent={<Aside/>}
      />
    </main>
  );
};

export default Home;
