import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import '../styles/book-main.css'
import Header from '../components/Header'
import Fotter from '../components/Fotter'
import Preloader from '../components/Preloader';
import PdfSlider from '../components/PdfSlider';
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Book = (props) => {

  const { id } = useParams();

  const [bookData, setBookData] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    console.log("start");
    Axios.get(`http://localhost:8080/book/${id}`)
      .then((response) => {
        setBookData(response.data);
        import(`../books/${response.data.book_url}`)
        .then((pdf) => {
            setPdfFile(pdf.default);
          })
          .catch((pdfError) => {
            console.log(`..${response.data.book_url}` === "../books/dorian.pdf");
            console.error('Помилка імпорту PDF:', pdfError);
          });
      })
      .catch((error) => {
        console.error('Помилка отримання даних:', error);
      });
  }, [id]);

  if (!bookData) {
    return <Preloader />
  }

  return (
    <>
      <Preloader />
      <Header />
      <div className='main'>
        <div className='main__leftside'>
          <div style={{ width: "90%" }}>
            <h1 className='main__title'>{bookData.book_name}</h1>
            <p className='main__subTitle'>{bookData.book_name_en}</p>
          </div>
          <img className='main__image' src={bookData.book_img_url} alt="ok" />
          <div className='main__info'>
            <p>Рік виходу: {bookData.book_year}</p>
            <p>Вік. рейтинг: {bookData.book_age}</p>
            <p>Країна: {bookData.book_country}</p>
            <p>Жанр: {bookData.book_type}</p>
            <p>Автор: {bookData.book_author}</p>
          </div>
        </div>
        <div className='main__rightside'>
          <PdfSlider book={pdfFile} book_name={bookData.book_name} desc={bookData.book_desc} />
        </div>
      </div>
      <Fotter />
    </>
  )
};

export default Book
