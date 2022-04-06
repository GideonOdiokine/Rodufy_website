import React from "react";
import MiniHeader from "./MiniHeader";
import "./styles/home.scss";

const index = () => {
  return (
    <div className="home">
      <MiniHeader />
      <section className="hero"></section>
    </div>
  );
};

export default index;
