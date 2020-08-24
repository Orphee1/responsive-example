import React from "react";

// import "../../App.css";
// import "./style.css";
import "../../styles/styles.css";

// Image import
import image from "../../images/camera.png";

export default function SoonScreen() {
  return (
    <div className="soon-screen">
      <div className="soon-container">
        <h2>Coming Soon</h2>
        <img src={image} alt="Leica camera" />
        <svg
          className="circle"
          width="500"
          height="503"
          viewBox="0 0 500 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="250" cy="251.5" rx="250" ry="251.5" fill="#F11F0E" />
        </svg>
      </div>
    </div>
  );
}
