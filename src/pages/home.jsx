import Header from "../components/presentational/header/Header";
import TopBar from "../components/presentational/topBar/TopBar";
import Main from "../components/presentational/main/Main";
import Filters from "../components/presentational/filters-blog/Filters";
import Posts from "../components/container/posts/Posts";
import Aside from "../components/presentational/aside/Aside";

const Home = () => {
  return (
    <main>
      <TopBar />
      <Header />
      <Main
        headerComponent={<Filters />}
        contentComponent={<Posts />}
        asideComponent={<Aside />}
      />
    </main>
  );
};

export default Home;
