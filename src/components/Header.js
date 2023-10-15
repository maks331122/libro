import React from "react";
import logo from "../images/logo-2.png";
import user from "../images/user.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__leftside">
          <img className="header__logo" src={logo} alt="logo" />
          <input
            className="header__search"
            placeholder="Search Libro"
            type="text"
          />
        </div>
        <div className="header__rightside">
          <div className="header__nav">
            <button className="header__button">Новинки</button>
            <button className="header__button">Популярне</button>
            <button className="header__button">Категорії</button>
            <button className="header__button">Проект</button>
            <img className="header__user" src={user} alt="user" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
