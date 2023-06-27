/* eslint-disable react/prop-types */

import Login from "../auth/Login";
import SingUp from "./SingUp";

const Auth = ({ openModalLogin }) => {
  return openModalLogin ? <Login /> : <SingUp/>;
};

export default Auth;
