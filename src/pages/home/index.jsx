import React, { useState } from "react";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import MiniHeader from "./MiniHeader";
import "./styles/home.scss";

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="home">
      {showNav && <MiniHeader handleShow={handleShow} />}
      <Hero />
      <HeroSecond handleShow={handleShow} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
