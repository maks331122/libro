import React, { useState, useEffect } from "react";
import "../styles/headerMobile.css";
import { Link } from "react-router-dom";
import logo from "../images/logo-2.png";
import Axios from 'axios';

export const HeaderMobile = () => {
  const [active, setActive] = useState(false);

  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  async function Search(event) {
    const query = encodeURIComponent(event.target.value);
    console.log(query);

    try {
      if (query.length !== 0) {
        const response = await Axios.get(`http://localhost:8080/search/${query}`);
        console.log(response.data[0].book_name);
        setBookData(response.data);
        setError(null);
      } else {
        setBookData(null);
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      setBookData([]);
      setError('Помилка запиту. Будь ласка, спробуйте ще раз.');
    }
  }

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="header__mobile">
      <div className="mobile__logo">
        <img src={logo} onClick={() => window.location.href = `/`} alt="ok" />
      </div>
      <div className="mobile__search">
        <input
          placeholder="Search Libro"
          type="text"
          onChange={Search}
        />
        {error && <p>{error}</p>}
        {bookData && bookData.length > 0 ? bookData !== 'nope' ? (
          <ul className="searcherMobile">
            {bookData.map((book) => (
              <li key={book.id}>
                <Link className="linkMobile" to={`/book/${book.id}`}>{book.book_name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        ) : (<></>)}
      </div >
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
              <a href="/">Новинки</a>
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
