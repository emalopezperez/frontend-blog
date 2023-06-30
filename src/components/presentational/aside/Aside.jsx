import "./aside.css";

const Aside = () => {
  return (
    <aside className="container-sidebar">
      <div className="sidebar-item">
        <span className="">ULTIMO ARTICULOS</span>
        <img
          className="img-sidebar"
          src="https://images.unsplash.com/photo-1580671905832-91b2ff0a557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
        <h3>titulo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        </p>

        <div className="email-input-sidebar">
          <span className="">¡Suscríbete a la newsletter!</span>
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button type="submit">Suscribite</button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
