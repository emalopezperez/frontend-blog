import "./about.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import"./about.css"
import SlidersProjects from "./SlidersProjects";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container-about">
      <article>
        <img
          className="image-article"
          src="https://images.unsplash.com/photo-1522071740424-8b337d0dfa93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="sobre mi"
        />

        <h2 className="article-title">Sobre mi</h2>
        <p className="article-parrafo">
          ¡Hola! Soy Emanuel López, Software developer con experiencia en
          proyectos personales y trabajos freelance en JavaScript, React Js,
          Next Js, Node.js, Express, Mongo DB, HTML, CSS y SEO. Durante dos
          años, he desarrollado y lanzado con éxito varios proyectos personales,
          aplicando mis habilidades en tecnologías como Tailwind CSS, Firebase,
          Strapi y Git. También he trabajado como freelancer en varios
          proyectos, proporcionando soluciones eficientes y efectivas para
          clientes. Me especializo en encontrar soluciones creativas y trabajar
          en equipo, siempre siguiendo buenas prácticas de programación. Si
          estás buscando un desarrollador front-end entusiasta y apasionado con
          experiencia en proyectos personales y trabajos freelance, no dudes en
          contactarme. Estoy emocionado de unirme a un equipo en el que pueda
          aplicar mis habilidades y aprender de los demás. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Praesentium consequatur
          exercitationem, veritatis repellendus corporis neque aspernatur beatae
          excepturi reiciendis, cumque aliquam. Iste obcaecati nemo nam quidem
          facilis ut quo perspiciatis?
        </p>

        <Link to="/">
          <button className="button-volver">
            <span>Volver</span>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-arrow-right"
              fill="currentColor"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                fillRule="evenodd"></path>
            </svg>
          </button>
        </Link>
      </article>
    </section>
  );
};

export default About;
