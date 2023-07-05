import "./resources.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/presentational/topBar/TopBar";
import ResourcesContainer from "../../components/container/resources/ResourcesContainer";
import FiltersResources from "../../components/presentational/resources/FiltersResources";
import Aside from "../../components/presentational/aside/Aside";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <TopBar/>
      <main className="container-resources">
        <section className="grid-resources">
          <h2 className="title-resources">Recursos y Herramientas</h2>

          <div className="categories">
            <FiltersResources />
          </div>
          <div className="cards-resources">
            <ResourcesContainer />
          </div>
          <aside className="sidebar-resources">
            <Aside />
          </aside>

          <div className="container-button-resources"></div>
        </section>
      </main>
    </>
  );
};

export default Resources;
