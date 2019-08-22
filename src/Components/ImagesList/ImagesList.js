import React from "react";
import "./ImagesList.css";

export default function ImagesList({ Images, loading }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="ImagesList">
      {Images.map(el => {
        return <img key={el.id} alt={el.id} src={el.link} />;
      })}
    </div>
  );
}
