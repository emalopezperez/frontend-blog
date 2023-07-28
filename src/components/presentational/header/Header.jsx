import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>¡Suscríbete a la newsletter!</h1>
      <p className="">
        Recibirás artículos de calidad sobre frontend y todas las novedades en
        las que vaya trabajando
      </p>
      <div className="email-input">
        <input type="email" placeholder="Ingresa tu correo electrónico" />
        <button type="submit">Suscribite</button>
      </div>
    </header>
  );
};

export default Header;
