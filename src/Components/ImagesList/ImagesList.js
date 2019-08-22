import React from "react";
import "./ImagesList.css";

export default function ImagesList({ Images }) {
  return (
    <div className="ImagesList">
      {Images.map(el => {
        return <img key={el.id} alt={el.id} src={el.link} />;
      })}
    </div>
  );
}
