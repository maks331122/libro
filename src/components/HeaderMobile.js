import React from "react";
import "../styles/headerMobile.css";
import logo from "../images/logo-2.png";

export const HeaderMobile = () => {
  return (
    <div className="header__mobile">
      <div className="mobile__logo">
        <img src={logo} alt="ok"/>
      </div>
      <div className="mobile__search">
      <input
          placeholder="Search Libro"
          type="text"
        />
      </div>
      <div className="mobile__icon">
        <span/>
      </div>
    </div>
  )
}