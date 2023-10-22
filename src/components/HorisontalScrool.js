import React from "react";
import "../styles/scrool.css"


class HorisontalScrool extends React.Component {
  render(){
    return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2 className="titleText">{this.props.typeName}</h2>
      <div className="container">
        {this.props.scroolImages.map(([imgUrl, url]) => (
          <div className="card" key={imgUrl}>
            <img className="card__image" onClick={() =>{window.open(url)}} src={imgUrl} alt="ok"/>
          </div>
        ))}
      </div>
    </div>
    )
  }
}

export default HorisontalScrool;