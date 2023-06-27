import TopBar from "../components/presentational/topBar/TopBar";
import About from "../components/presentational/about/About";
import Container from "../components/presentational/containers/Container";
import Aside from "../components/presentational/aside/Aside";

const SobreMi = () => {
  return (
    <div>
      <TopBar />
      <main className="main-container-detail-article">
        <Container contentComponent={<About />} asideComponent={<Aside />} />
      </main>
    </div>
  );
};

export default SobreMi;
