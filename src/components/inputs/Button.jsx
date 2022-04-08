import React from "react";
import "./styles/Button.scss";

const Button = ({ type, text, bg, handleClick }) => {
  return (
    <div className="button">
      <button onClick={handleClick} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
