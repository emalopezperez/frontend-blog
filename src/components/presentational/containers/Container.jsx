/* eslint-disable react/prop-types */

import "./container.css";

const Container = ({ contentComponent, asideComponent }) => {
  return (
    <main className="container">
      <section className="main">{contentComponent}</section>
      <aside className="aside">{asideComponent}</aside>
    </main>
  );
};

export default Container;
