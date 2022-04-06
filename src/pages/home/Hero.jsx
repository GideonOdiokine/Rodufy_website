import React from "react";
import logo from "../../assets/image/logo.png";
import PlayStore from "../../assets/image/img_1.png";
import Apple from "../../assets/image/img_2.png";
import showcase from "../../assets/image/showcase.png";
import Button from "../../components/inputs/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero__btns">
          <div className="sign__up">
            <Button text="Register" />
          </div>
          <div className="sign__up">
            <Button text="Login" bg="transparent" />
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
