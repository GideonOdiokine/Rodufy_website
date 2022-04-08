import React from "react";
import "./styles/heroStyles.scss";
import showcase from "../../assets/image/img_3.png";
import Button from "../../components/inputs/Button";

const HeroSecond = ({ handleShow }) => {
  return (
    <div className="hero__second">
      <div className="hero__content">
        <div className="left">
          <h3>
            Everything you’ll <br /> need to <span>excel</span> in life
          </h3>
          <p>
            We’ve curated a list of valuable resources
            <br /> to get you going in life, all for free!
          </p>
          <div className="hero__icons">
            <Button text="Get Started" handleClick={handleShow} />
          </div>
        </div>
        <div className="right">
          <img src={showcase} alt="showcase" />
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
