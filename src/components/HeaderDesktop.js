import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-2.png";
import Axios from 'axios';

export const HeaderDesktop = () => {
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

  return (
    <header className="header">
      <div className="header__leftside">
        <img className="header__logo" onClick={() => window.location.href = `/`} src={logo} alt="logo" />
      </div>
      <div className="search_sys">
        <input
          className="header__search"
          placeholder="Search Libro"
          type="text"
          onChange={Search}
        />
        {error && <p>{error}</p>}
        {bookData && bookData.length > 0 ? bookData !== 'nope' ? (
          <ul className="searcher">
            {bookData.map((book) => (
              <li key={book.id}>
                <Link className="link" to={`/book/${book.id}`}>{book.book_name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        ) : (<></>)}
      </div >
      <div className="header__rightside">
        <div className="header__nav">
          <button onClick={() => window.location.href = `/`} className="header__button">
            Новинки
          </button>
          <button className="header__button">Про нас</button>
        </div>
      </div>
    </header >
  );
};
