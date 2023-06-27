
import TopBar from "../../components/presentational/topBar/TopBar";
import Aside from "../../components/presentational/aside/Aside";

const Resources = () => {
  return (
    <main className="container-home">
      <TopBar />
      
      <main className="container-home-grid">
      <nav className="navbar-home">
        filter
        </nav>
      <section className="cards-home">
        posty
        </section>
      <aside className="aside-home">
        <Aside/>
        </aside>
    </main>
    </main>
  )
}

export default Resources

