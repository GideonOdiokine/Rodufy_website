import React from "react";
import MiniHeader from "./MiniHeader";
import logo from "../../assets/image/logo.png";
import "./styles/home.scss";

const index = () => {
  return (
    <div className="home">
      <MiniHeader />
      <section className="hero">
        <div className="hero__container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
