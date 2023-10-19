import React from "react";
import Header from "./Header";
import {Slider} from "./Slider.tsx";
import HorisontalScrool from "./HorisontalScrool";
import sliderbook1 from "../images/dorian gray.png";
import sliderbook2 from "../images/Charlie.png";
import sliderbook3 from "../images/Tygrolovy.png";
import book1 from "../images/Little Prince.png"
import book2 from "../images/451 degrees.png"
import book3 from "../images/daVinci.png"
import book4 from "../images/duna.png"
import book5 from "../images/gavan.png"
import book6 from "../images/znyknennya.png"
import book7 from "../images/Institute.png"
import book8 from "../images/gra.png"

const books = [
  {
    genre: 'Фентезі',
    titles: [[book1, "ok1"]]
  },
  {
    genre: 'Наукова фантастика',
    titles: [[book2, "ok2"], [book4, "ok4"], [book7, "ok7"]]
  },
  {
    genre: 'Детектив',
    titles: [[book3, "ok3"], [book5, "ok5"], [book6, "ok6"]]
  },
  {
    genre: 'Роман',
    titles: [[book8, "ok8"], [sliderbook1, "https://fs02.vseosvita.ua/0200ezje-dd4f/001-0x0.jpg"], [sliderbook2, "ok"], [sliderbook3, "ok"]]
  }
];


const sliderImages = [[sliderbook1, "https://fs02.vseosvita.ua/0200ezje-dd4f/001-0x0.jpg"], [sliderbook2, "ok"], [sliderbook3, "ok"]];

class Newest extends React.Component {
  render() {
    return (
      <div className="newest">
        <Header />
        <div style={{
          maxWidth: "1000px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto"
        }}>
          <Slider sliderImages={sliderImages} />
        </div>
        <HorisontalScrool scroolImages={books[0].titles} typeName="Фентезі"/>
        <HorisontalScrool scroolImages={books[1].titles} typeName="Наукова фантастика"/>
        <HorisontalScrool scroolImages={books[2].titles} typeName="Детектив"/>
        <HorisontalScrool scroolImages={books[3].titles} typeName="Роман"/>
      </div>
    )
  }
}

export default Newest;