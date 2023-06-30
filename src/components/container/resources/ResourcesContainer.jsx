import "./resources-container.css";
import CardsResources from "../../presentational/resources/CardsResources";

const ResourcesContainer = () => {
  const resources = [
    {
      img: "https://images.unsplash.com/photo-1555530001-acee1750bdcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      titulo: "Unsplash",
      categoria: "frontend",
      link: "https://unsplash.com/",
    },
    {
      img: "/public/img/recursos/undraw.png",
      titulo: "undraw",
      categoria: "frontend",
      link: "https://undraw.co/illustrations",
    },
    {
      img: "/public/img/recursos/happyhues.png",
      titulo: "happyhue",
      categoria: "frontend",
      link: "https://unsplash.com/",
    },
    {
      img: "/public/img/recursos/hype4.png",
      titulo: "hype4",
      categoria: "frontend",
      link: "https://hype4.academy/tools/glassmorphism-generator",
    },
  ];

  return (
    <main className="container-resources">
      <section className="resources-grid">
        {resources.map((element, index) => (
          <CardsResources element={element} key={index} />
        ))}
      </section>
    </main>
  );
};

export default ResourcesContainer;
