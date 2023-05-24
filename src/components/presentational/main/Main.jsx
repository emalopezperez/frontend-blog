import "./main.css";
import Posts from "../../container/posts/Posts";
import Aside from "../aside/Aside";

const Main = () => {
  return (
    <main className="container">
      <section className="cards">
      <Posts/>
      </section>
      <aside className="aside">
       <Aside/>
      </aside>
    </main>
  );
};

export default Main;
