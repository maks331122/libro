import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/slider.css";

type ImgSliderProps = {
  sliderImages: [string, string];
};

export function Slider({ sliderImages }: ImgSliderProps) {
  const [imgIndex, setImgIndex] = useState(0);

  function showNextImage() {
    setImgIndex((index) => {
      if (index === sliderImages.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImgIndex((index) => {
      if (index === 0) return sliderImages.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="slider">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          borderRadius: "8px"
        }}
      >
        {sliderImages.map(([imgUrl, url]) => (
          <img
            key={imgUrl}
            src={imgUrl}
            loading="lazy"
            onClick={() => window.open(url, '_blank')}
            alt="sliderImage"
            className="slider__image"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>
      <div className="arrows">
        <button className="arrow" onClick={showPrevImage} style={{ left: 0 }}>
          <ChevronLeft />
        </button>
        <button className="arrow" onClick={showNextImage} style={{ right: 0 }}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
