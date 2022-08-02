import React from "react";
import icon from "../assets/navIcon.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={icon} rel="icon" className="nav-icon" />
      <p className="nav-title">My Travel Journal</p>
    </div>
  );
}
