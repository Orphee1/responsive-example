import React from "react";

import "../styles/styles.css";

// Icons import
import insta from "../images/instagram.png";
// import insta from "../images/instagram.svg";
import youtu from "../images/youtube.svg";
// import twitt from "../images/twitter.svg";
import twitt from "../images/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h1>Leica 2020</h1>
        <ul>
          <li>
            <img src={twitt} alt="twitter" className="footer-icon" />
          </li>
          <li>
            <img src={insta} alt="instagram" className="footer-icon" />
          </li>
          <li>
            <img
              src={youtu}
              alt="youtube"
              className="footer-icon"
              //     style={{ color: "white" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
