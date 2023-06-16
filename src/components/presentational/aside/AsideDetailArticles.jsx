/* eslint-disable react/prop-types */
import "./aside-detail-articles.css";
import { Link as ScrollLink } from "react-scroll";

// eslint-disable-next-line react/prop-types
const AsideDetailArticles = ({ indice }) => {
  return (
    <aside className="sidebar-detail-articles">
      <div className="sidebarItem">
        <span className="sidebarTitle">INDICE ARTICULO</span>

        <ul className="indice">
          {indice.map((element) => {
            const formattedElement = element.replace(/-/g, " ");
            return (
              <li key={element}>
                <ScrollLink to={element} smooth={true} duration={500}>
                  {formattedElement}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">ULTIMOS ARTICULOS</span>
        <img
          className="img-sidebar"
          src="https://images.unsplash.com/photo-1580671905832-91b2ff0a557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </aside>
  );
};

export default AsideDetailArticles;
