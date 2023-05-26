import { useState, useContext } from "react";
import authContext from "../../../context/auth/authContext";

const Login = () => {
  const AuthContext = useContext(authContext);
  const { login } = AuthContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.length <= 3) {
      console.log("nombre muy corto");

      return;
    }

    if (password.length <= 2) {
      console.log("error contrasena muy corta");

      return;
    }

    let data = {
      email: email,
      password: password,
    };

    login(data);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
