import React from "react";
import "./styles/register.scss";
import logo from "../../assets/image/logo.png";
import Input from "../../components/inputs/Input";
import Button from "../../components/inputs/Button";
import authService from "../../features/auth/authService";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const userData = {
        email,
        password,
      };
      console.log(userData);
      authService.register(userData);
    }
  };

  return (
    <div className="container flex">
      <div className="left">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" text="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
