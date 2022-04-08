import React from "react";
import showcase from "../../assets/image/img_4.png";
// import Button from "../../components/inputs/Button";

const ContactSection = () => {
  return (
    <div className="hero__second" id="hero__second">
      <div className="hero__content">
        <div className="left">
          <h3>Contact Us</h3>
          <p>
            Got any questions, feedback, request and complains? Reach out...
          </p>
        </div>
        <div className="right">
          <img src={showcase} alt="showcase" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
