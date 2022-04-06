import React from "react";
import "./styles/Button.scss";

const Button = ({ type, text, bg }) => {
  return (
    <div className="button">
      <button
        style={{ background: bg, border: bg ? "1px solid #EA7052" : "" }}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
