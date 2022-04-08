import React from "react";
import "./styles/register.scss";
import logo from "../../assets/image/logo.png";
import Button from "../../components/inputs/Button";
import Input from "../../components/inputs/Input";
import { useState } from "react";
import authService from "../../features/auth/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const userData = {
        email,
        password,
      };
      await authService.login(userData);
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
          <h3>Login</h3>
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
          <Button type="submit" text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
