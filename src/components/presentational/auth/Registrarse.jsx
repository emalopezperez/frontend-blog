import "./form.css";

const Registrarse = () => {
  return (
    <div className="form-container">
      <p className="title">Registrarse</p>
      <form className="form">
        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" id="email" placeholder="" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" id="password" placeholder="" />
        </div>
        <input type="submit" className="sign" value="Registrarse" />
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

export default Registrarse;
