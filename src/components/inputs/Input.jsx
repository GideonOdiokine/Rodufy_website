import React from "react";
import "./styles/Input.scss";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
