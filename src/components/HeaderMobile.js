import React, { useState, useEffect } from "react";
import "../styles/headerMobile.css";
import logo from "../images/logo-2.png";

export const HeaderMobile = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="header__mobile">
      <div className="mobile__logo">
        <img src={logo} alt="ok" />
      </div>
      <div className="mobile__search">
        <input placeholder="Search Libro" type="text" />
      </div>
      <div
        className={`burger__menu ${active ? "active" : ""}`}        
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div style={{backgroundColor: 'rgb(0,0,0,0)', position:'absolute', width: "30px", height: "30px"}} onClick={() => setActive(!active)}></div>

        <div className={`menu__items ${active ? "active" : ""}`}>
          <div className="mobileMenu__logo">
            <img style={{height: "90px"}} src={logo} alt="ok"/>
          </div>
          <ul style={{alignSelf: "center"}}>
            <li>
              <a href="#">Новинки</a>
            </li>
            <li>
              <a href="#">Популярне</a>
            </li>
            <li>
              <a href="#">Категорії</a>
            </li>
            <li>
              <a href="#">Обліковий запис</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
          </ul>
          <h2 style={{alignSelf: "center", color: "white", marginBottom: "80px"}} className="menu__info">&copy; 2023 Libro</h2>
        </div>
      </div>
    </div>
  );
};
