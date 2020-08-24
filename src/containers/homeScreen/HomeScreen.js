import React from "react";

// import "../../App.css";
// import "./style.css";
import "../../styles/styles.css";

// Image import
import leica1 from "../../images/cameraSmaller.png";

export default function HomeScreen() {
  return (
    <div className="home">
      <div className="showcase">
        <h2>Leica M6</h2>
        <img className="home-image" src={leica1} alt="Leica camera" />
        <div className="info">
          <h3>Small but powerful.</h3>
          <p>
            The new Leica offers 4K at 60fps, Raw Video and Full Frame Sensor
          </p>
        </div>
      </div>
    </div>
  );
}
