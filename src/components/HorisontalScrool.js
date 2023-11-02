import React from "react";
import "../styles/scrool.css";

function HorisontalScrool(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="titleText">{props.typeName}</h2>
      <div className="container">
        {props.scroolImages.map(([imgUrl, url]) => (
          <div className="card" key={imgUrl}>
            <img
              className="card__image"
              onClick={() => {
                window.location.href = `/book/${url}`;
              }}
              src={imgUrl}
              alt="ok"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorisontalScrool;
