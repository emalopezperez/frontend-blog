import "./containers-home.css";
import Header from "../../components/presentational/header/Header";
import TopBar from "../../components/presentational/topBar/TopBar";
import RecentPosts from "../../components/presentational/recent-posts-home/RecentPosts";
import Filters from "../../components/presentational/filters-blog/Filters";
import Posts from "../../components/container/posts/Posts";

const Home = () => {
  return (
    <main className="container-home">
      <TopBar />
      <Header />
      <RecentPosts />
      <section className="container-home-grid">
        <nav className="navbar-home">
          <Filters />
        </nav>
        <section className="cards-home">
          <Posts />
        </section>
      </section>
    </main>
  );
};

export default Home;
