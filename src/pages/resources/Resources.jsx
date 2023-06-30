import "./resources.css";
import { useEffect } from "react";
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
      <TopBar />
      <main className="container-resources">
        <section className="grid-resources">
          <div className="categories">
            <FiltersResources />
          </div>
          <div className="cards-resources">
            <ResourcesContainer />
          </div>
          <aside className="sidebar-resources">
            <Aside/>
          </aside>
          <div className="pagination-resources">Paginación</div>
          <div className="button-resources">home</div>
        </section>
      </main>
    </>
  );
};

export default Resources;
