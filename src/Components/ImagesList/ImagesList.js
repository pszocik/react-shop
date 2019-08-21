import React from "react";
import "./ImagesList.css";
import Images from "./Images";

export default function ImagesList() {
  return (
    <div className="ImagesList">
      {Images.map(el => {
        return <img key={el.id} alt={el.id} src={el.link} />;
      })}
    </div>
  );
}
