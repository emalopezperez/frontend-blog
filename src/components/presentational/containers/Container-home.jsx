import "./containers-home.css";

// eslint-disable-next-line react/prop-types
const ContainerHome = ({
  headerComponent,
  contentComponent,
  asideComponent,
}) => {
  return (
    <main className="container-home-grid">
      <nav className="navbar-home">{headerComponent}</nav>
      <section className="cards-home">{contentComponent}</section>
      <aside className="aside-home">{asideComponent}</aside>
    </main>
  );
};

export default ContainerHome;
