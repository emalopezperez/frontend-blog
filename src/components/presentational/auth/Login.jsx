import "./form.css";

const Login = () => {
  return (
    <div className="form-container">
      <p className="title">Login</p>
      <form className="form">
        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" id="password" placeholder="" />
        </div>
        <input type="submit" className="sign" value="Login"/>
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
