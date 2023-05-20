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
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </header>
  );
};

export default Header;
