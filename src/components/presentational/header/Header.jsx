import "./header.css";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <header className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
        <span className="headerTitleSm">
          <Typewriter
            words={["Programación & Tecnologia"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
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
