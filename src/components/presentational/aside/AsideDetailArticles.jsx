/* eslint-disable react/prop-types */
import "./aside-detail-articles.css";
import { Link as ScrollLink } from "react-scroll";

const AsideDetailArticles = ({ indice }) => {
  return (
    <aside className="container-sidebar-index">
      <div className="sidebar-index">
        <span className="sidebar-title">Contenido del artículo</span>
        <ul className="index">
          {indice.map((element) => {
            const formattedElement = element.replace(/-/g, " ");
            return (
              <li key={element} className="index-item hover:bg-black/80 hover:text-white">
                <ScrollLink
                  to={element}
                  smooth={true}
                  duration={500}
                  offset={-80}>
                  {formattedElement}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default AsideDetailArticles;
