import React from "react";
import "./styles/miniHeader.scss";

const MiniHeader = ({ handleShow }) => {
  return (
    <div className="mini__top">
      <div className="top__content">
        <span>New!</span>
        <p>Announcing our $15 million series A funding!</p>
        <svg
          onClick={handleShow}
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 0C13.1953 0 0 13.194 0 29.5C0 45.8049 13.194 59 29.5 59C45.8047 59 59 45.806 59 29.5C59 13.1951 45.806 0 29.5 0ZM29.5 54.3906C15.7429 54.3906 4.60938 43.2582 4.60938 29.5C4.60938 15.7427 15.7418 4.60938 29.5 4.60938C43.2571 4.60938 54.3906 15.7418 54.3906 29.5C54.3906 43.2573 43.2582 54.3906 29.5 54.3906Z"
            fill="white"
          />
          <path
            d="M39.5929 36.3336L32.7593 29.4999L39.5929 22.6663C40.4929 21.7663 40.493 20.3071 39.593 19.407C38.6928 18.5069 37.2336 18.507 36.3337 19.407L29.5 26.2406L22.6662 19.407C21.7664 18.5069 20.3069 18.5069 19.4069 19.407C18.507 20.3071 18.507 21.7663 19.4071 22.6663L26.2407 29.4999L19.4071 36.3336C18.507 37.2336 18.5069 38.6929 19.4069 39.5928C20.3073 40.4931 21.7665 40.4927 22.6662 39.5928L29.5 32.7592L36.3337 39.5928C37.2335 40.4928 38.6929 40.4929 39.593 39.5928C40.4931 38.6927 40.493 37.2335 39.5929 36.3336Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default MiniHeader;
