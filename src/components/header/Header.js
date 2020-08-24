import React from "react";
import { Link } from "react-router-dom";

// import "../../App.css";
// import "./style.css";
import "../../styles/styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <ul className="logo-nav">
          <li>
            <Link to="/">
              <h1 className="logo">Leica</h1>
            </Link>
          </li>
        </ul>
        <ul className="mini-nav">
          <li>
            <Link to="/features">
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link to="soon">
              <span className="order">Order</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
