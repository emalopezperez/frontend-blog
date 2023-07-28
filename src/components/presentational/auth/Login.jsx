import { useState, useContext, useEffect } from "react";
import authContext from "../../../context/auth/authContext";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const AuthContext = useContext(authContext);
  const { login, autenticado } = AuthContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (email.length <= 3) {
      toast.error("nombre muy corto");
      return;
    }

    if (password.length <= 2) {
      toast.error("error contrasena muy corta");
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

  useEffect(() => {
    if (autenticado) {
      toast.success("Bienvenid@");
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    }
  }, [autenticado]);

  return (
    <div className="form-container">
      <Toaster position="top-right" reverseOrder={false} />
      <Toaster position="top-right" reverseOrder={false} />
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
        <input type="submit" className="bg-white sign" value="Login" />
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
