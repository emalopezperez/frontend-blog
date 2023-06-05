import "./main.css";
import Posts from "../../container/posts/Posts";
import Aside from "../aside/Aside";
import Filters from "../filters-blog/Filters";

const Main = () => {
  return (
    <main className="container">
      <div className="navbar">
        <Filters />
      </div>
      <section className="cards">
        <Posts />
      </section>
      <aside className="aside">
        <Aside />
      </aside>
    </main>
  );
};

export default Main;
