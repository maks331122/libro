import React from "react";
import "../styles/preloader.css";
import Header from "../components/Header";
import { Slider } from "../components/Slider.tsx";
import HorisontalScrool from "../components/HorisontalScrool";
import Fotter from "../components/Fotter";
import Preloader from "../components/Preloader.jsx";
import sliderbook1 from "../images/dorian gray.png";
import sliderbook2 from "../images/Charlie.png";
import sliderbook3 from "../images/Tygrolovy.png";
import book1 from "../images/Little Prince.png";
import book2 from "../images/451 degrees.png";
import book3 from "../images/daVinci.png";
import book4 from "../images/duna.png";
import book5 from "../images/gavan.png";
import book7 from "../images/Institute.png";
import book8 from "../images/gra.png";
import book9 from "../images/Charlieimg.png";
import book10 from "../images/dorian gray img.png";
import book11 from "../images/Tygrolovyimg.png";

const books = [
  {
    genre: "Фентезі",
    titles: [[book1, "1009"]],
  },
  {
    genre: "Наукова фантастика",
    titles: [
      [book2, "1008"],
      [book4, "1007"],
      [book7, "1006"],
    ],
  },
  {
    genre: "Детектив",
    titles: [
      [book3, "1005"],
      [book5, "1004"]
    ],
  },
  {
    genre: "Роман",
    titles: [
      [book8, "1003"],
      [book10, "1000"],
      [book9, "1001"],
      [book11, "1002"],
    ],
  },
];

const sliderImages = [
  [sliderbook1, "1000"],
  [sliderbook2, "1001"],
  [sliderbook3, "1002"],
];

function Newest() {
  return (
    <div className="newest">
      <Preloader />
      <Header />
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <Slider sliderImages={sliderImages} />
      </div>
      <HorisontalScrool scroolImages={books[0].titles} typeName="Фентезі" />
      <HorisontalScrool
        scroolImages={books[1].titles}
        typeName="Наукова фантастика"
      />
      <HorisontalScrool scroolImages={books[2].titles} typeName="Детектив" />
      <HorisontalScrool scroolImages={books[3].titles} typeName="Роман" />
      <Fotter />
    </div>
  );
}

export default Newest;
