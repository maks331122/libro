import React, { useState, useRef, useLayoutEffect } from "react";
import { Document, Page } from "react-pdf";
import "../styles/pdfSlider.css"
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfSlider = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const prevPage = () => {
    setPageNumber(pageNumber <= 1 ? 1 : pageNumber - 1)
  }
  const nextPage = () => {
    setPageNumber(pageNumber >= numPages ? pageNumber : pageNumber + 1)
  }

  const containerRef = useRef(null);
  useLayoutEffect(() => {
    function updateSize() {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

    return (
      <div className="pdfFile" ref={containerRef}>
        <h2 style={{color: "white", fontFamily: "athena", marginTop: "10px"}}>Про що книга {props.book_name}</h2>
        <p className="description">{props.desc}</p>
        <div style={{ position: "relative" }}>
          <Document file={props.book} onLoadSuccess={onDocumentLoadSuccess}>
            <Page className="page" width={containerSize.width} height={containerSize.height} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
          <div className="arrows">
            <button className="arrow" onClick={prevPage} style={{ left: 0 }}>
              <ChevronLeft />
            </button>
            <button className="arrow" onClick={nextPage} style={{ right: 0 }}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <p className="pages">Page {pageNumber} of {numPages}</p>
      </div>
    );
  };

  export default PdfSlider;
