/* eslint-disable react/prop-types */

import Login from "../auth/Login";
import Registrarse from "./Registrarse";

const Auth = ({ openModalLogin }) => {
  return openModalLogin ? <Login /> : <Registrarse />;
};

export default Auth;
