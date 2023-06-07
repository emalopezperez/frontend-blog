import "./main.css";

// eslint-disable-next-line react/prop-types
const Main = ({ headerComponent, contentComponent, asideComponent }) => {
  return (
    <main className="container">
      <div className="navbar">{headerComponent}</div>
      <section className="cards">{contentComponent}</section>
      <aside className="aside">{asideComponent}</aside>
    </main>
  );
};

export default Main;
