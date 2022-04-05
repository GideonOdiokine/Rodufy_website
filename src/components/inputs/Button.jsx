import React from "react";
import "./styles/Button.scss";

const Button = ({ type, text }) => {
  return (
    <div className="button">
      <button type={type}>{text}</button>
    </div>
  );
};

export default Button;
