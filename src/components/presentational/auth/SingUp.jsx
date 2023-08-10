import { useState, useContext } from "react";
import authContext from "../../../context/auth/authContext";
import "./form.css";

const SingUp = () => {
  const AuthContext = useContext(authContext);
  const { singUp  } = AuthContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length === 0) {
      console.log("Por favor, ingresa un nombre válido.");
      return;
    }

    if (!emailIsValid(email)) {
      console.log("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      console.log("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    let data = {
      email: email,
      password: password,
      nombre: name,
    };

    singUp (data);

    setName("");
    setEmail("");
    setPassword("");
  };

  const emailIsValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
      <p className="title">Registrarse</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
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
        <input type="submit" className="bg-white sign" value="Regtistrarse" />
      </form>

      <p className="signup">
        Dont have an account?
        <a rel="noopener noreferrer" href="#" className="">
          Login
        </a>
      </p>
    </div>
  );
};

export default SingUp;
