import React, { useState } from "react";
import Image from "./Image";
import "./ImagesList.css";

const ImagesList = ({ Images, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="ImagesList">
      {Images.map(el => {
        return <Image key={el.id} id={el.id} link={el.link} />;
      })}
    </div>
  );
};

export default ImagesList;
