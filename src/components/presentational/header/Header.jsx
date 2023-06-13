import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Programacion & Tecnologia</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=50"
        alt=""
      />
    </header>
  );
};

export default Header;
