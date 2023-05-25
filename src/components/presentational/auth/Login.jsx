import { useState, useContext } from "react";
import authContext from "../../../context/auth/authContext";

const Login = () => {
  const AuthContext = useContext(authContext);
  const { login } = AuthContext;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length <= 3) {
      console.log("nombre muy corto");

      return;
    }

    if (password.length <= 2) {
      console.log("error contrasena muy corta");

      return;
    }

    let data = {
      email: username,
      password: password,
    };

    login(data);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <input type="submit" className="sign" value="Login" />
      </form>

      <p className="signup">
        Dont have an account?
        <a rel="noopener noreferrer" href="#" className="">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
