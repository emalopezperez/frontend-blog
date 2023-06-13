import "./aside.css";

const Aside = () => {
  return (
    <aside>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">SOBRE MI</span>
          <img
            className="img-sidebar"
            src="https://images.unsplash.com/photo-1580671905832-91b2ff0a557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            qui necessitatibus nostrum illum reprehenderit.
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">NOVEDADES</span>
          <img
            className="img-sidebar"
            src="https://images.unsplash.com/photo-1506506200949-df8644f002d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            qui necessitatibus nostrum illum reprehenderit.
          </p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CONTACTO</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
