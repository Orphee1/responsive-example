import React from "react";

// import "../../App.css";
// import "./style.css";
import "../../styles/styles.css";

// Images import
import image1 from "../../images/card11.png";
import image2 from "../../images/card21.png";
import image3 from "../../images/card31.png";

export default function FeaturesScreen() {
  return (
    <div className="features" style={{ zIndex: 0 }}>
      <div className="features-container">
        <h2>Features</h2>
        <div className="cards ">
          <div className="card">
            <img className="" src={image1} alt="" />
            <h4>4K 60FPS</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
          </div>
          <div className="card">
            <img className="" src={image2} alt="" />
            <h4>Full Frame</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
          </div>
          <div className="card">
            <img className="" src={image3} alt="" />
            <h4>4K 60FPS</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <img className="wave" /> */}
      <svg
        style={{
          position: "absolute",
          //   bottom: "-5%",
          bottom: 0,

          left: 0,
          zIndex: -1,
        }}
        className="wave"
        // width="1440"
        // height="399"
        viewBox="0 0 1440 399"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1061 116.161C915 214.161 -17 -69.8393 -121 18.1607L-139 458.161L1507 488.161V18.1607C1407 18.1607 1177.8 37.7607 1061 116.161Z"
          fill="#F11F0E"
          stroke="#F11F0E"
        />
      </svg>
    </div>
  );
}
