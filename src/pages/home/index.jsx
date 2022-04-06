import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import MiniHeader from "./MiniHeader";
import "./styles/home.scss";

const index = () => {
  return (
    <div className="home">
      <MiniHeader />
      <Hero />
      <HeroSecond />
    </div>
  );
};

export default index;
