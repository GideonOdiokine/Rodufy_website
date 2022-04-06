import React from "react";
import "./styles/heroSecond.scss";
import showcase from "../../assets/image/img_3.png";
import Button from "../../components/inputs/Button";

const HeroSecond = () => {
  return (
    <div className="hero__second">
      <div className="hero__content">
        <div className="left">
          <h3>
            Everything you’ll need to <span>excel</span> in life
          </h3>
          <p>
            We’ve curated a list of valuable resources to get you going in life,
            all for free!
          </p>
          <div className="hero__icons">
            <Button text="Get Started" />
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
