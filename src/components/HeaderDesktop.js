import React from "react";
import logo from "../images/logo-2.png";

export const HeaderDesktop = () => {
  return (
    <header className="header">
      <div className="header__leftside">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <input
        className="header__search"
        placeholder="Search Libro"
        type="text"
      />
      <div className="header__rightside">
        <div className="header__nav">
          <button onClick={() => window.location.href = `/`} className="header__button">
            Новинки
          </button>
          <button className="header__button">Про нас</button>
        </div>
      </div>
    </header>
  );
};
