import React from "react";
import "./styles/register.scss";
import logo from "../../assets/image/logo.png";
import Input from "../../components/inputs/Input";

const Register = () => {
  return (
    <div className="container flex">
      <div className="left">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
      </div>
      <div className="right">
        <form>
          <h3>Register</h3>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default Register;
