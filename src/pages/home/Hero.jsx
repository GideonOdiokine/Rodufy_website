import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import PlayStore from "../../assets/image/img_1.png";
import Apple from "../../assets/image/img_2.png";
import showcase from "../../assets/image/showcase.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hero__btns">
          <div className="sign__up">
            <Link to="/register">Register</Link>
          </div>
          <div className="sign__in">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="hero__content">
        <div className="left">
          <h3>
            Our mission is to <span>advance</span> humanity
          </h3>
          <p>
            We would strive to achieve that through providing education and
            quality health
          </p>
          <div className="hero__icons">
            <h4>
              DOWNLOAD <br /> APP
            </h4>
            <img src={PlayStore} alt="img" />
            <img src={Apple} alt="img" />
          </div>
        </div>
        <div className="right">
          <img src={showcase} alt="showcase" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
