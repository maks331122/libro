import React from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/fotter.css";
import logo from "../images/logo-2.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.png";
import twitter from "../images/twitter.png";

const Fotter = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="fotter">
      <div className="fotter__logo">
        <img className="logo__img" src={logo} alt="logo" />
      </div>
      <div className="line"></div>
      <div className="fotter__icons">
        <img
          onClick={() => {
            window.open("https://www.instagram.com/maskhav/");
          }}
          className="fotter__icon"
          src={instagram}
          alt="ok"
        ></img>
        <img
          onClick={() => {
            window.open("https://t.me/maskhav");
          }}
          className="fotter__icon"
          src={telegram}
          alt="ok"
        ></img>
        <img
          onClick={() => {
            window.open("https://twitter.com");
          }}
          className="fotter__icon"
          src={twitter}
          alt="ok"
        ></img>
      </div>
      
      {isMobile ?(<></>):(<>
        <div className="line"></div>
        <div className="fotter__info"><p>Про нас</p></div>
        </>
      )}       
      <div className="line"></div>
      <div style={{ color: "white", fontSize: "19px" }}><p>&copy; 2023 Libro</p></div>
    </div>
  );
};

export default Fotter;
