/* eslint-disable react/prop-types */

import "./container.css";

const Container = ({ contentComponent, asideComponent,footerComponent }) => {
  return (
    <main className="container">
      <section className="main">{contentComponent}</section>
      <aside className="aside">{asideComponent}</aside>
      <footer className="footer">{footerComponent}</footer>
    </main>
  );
};

export default Container;
